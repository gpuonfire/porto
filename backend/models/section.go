package models

import (
	"my.de/rest-api/db"
	"my.de/rest-api/utils"
)

type Section struct {
	id          int          `json:"id"`
	Layout      string       `json:"layout"`
	SectionBits []SectionBit `json:"sectionBits"`
}
type SectionBit struct {
	Type    string `json:"type" binding:"required"`
	Content string `json:"content" binding:"required"`
	Image   Image  `json:"image" binding:"required"`
}

func GetSections(projectId string) ([]Section, error) {
	query := `
	SELECT s.id, s.layout
	FROM sections s
	LEFT JOIN projects p ON s.project_id = p.id
	WHERE p.id = ?
	ORDER BY s.position ASC
	`
	rows, err := db.DB.Query(query, projectId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var sections []Section
	for rows.Next() {
		var section Section
		err := rows.Scan(&section.id, &section.Layout)
		if err != nil {
			return nil, err
		}
		sections = append(sections, section)
	}
	return sections, nil
}

func GetProjectContent(projectId string) ([]Section, error) {
	sections, err := GetSections(projectId)
	utils.Debug("Get sections for project id: ", projectId, " sections: ", sections)
	if err != nil {
		return nil, err
	}

	query := `
		SELECT b.type AS content_type,
		    CASE 
		        WHEN b.type = 'image' THEN b.image_name
		        ELSE b.text_content
		    END AS content
		FROM sections s
		LEFT JOIN section_bits b ON s.id = b.section_id
		LEFT JOIN images i ON b.image_name = i.name
		WHERE s.id = ?
		ORDER BY b.position ASC;
	`
	for i := range sections {
		rows, err := db.DB.Query(query, sections[i].id)
		if err != nil {
			return nil, err
		}
		defer rows.Close()

		var bits []SectionBit
		for rows.Next() {
			var bit SectionBit
			err := rows.Scan(&bit.Type, &bit.Content)
			if err != nil {
				return nil, err
			}

			if bit.Type == "image" {
				utils.Debug("Get image for section bit: ", bit.Content)
				img, err := GetImageByName(bit.Content)
				if err != nil {
					return nil, err
				}
				bit.Image = *img
			}
			bits = append(bits, bit)
		}
		sections[i].SectionBits = bits
	}
	return sections, nil
}
