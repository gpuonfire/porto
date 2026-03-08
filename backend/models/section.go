package models

import (
	"my.de/rest-api/db"
)

type Section struct {
	id          int
	Layout      int
	SectionBits []SectionBit
}
type SectionBit struct {
	Type    string `binding:"required"`
	Content string
}

func GetSections(section_id int64) ([]Section, error) {
	query := `
	SELECT s.id, s.layout
	FROM sections s
	LEFT JOIN projects p ON s.project_id = p.id
	WHERE p.id = ?
	ORDER BY s.position ASC
	`
	rows, err := db.DB.Query(query, section_id)
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

func GetProjectSections(projectId int64) ([]Section, error) {
	sections, err := GetSections(projectId)
	if err != nil {
		return nil, err
	}

	query := `
SELECT b.type AS content_type,
    CASE 
        WHEN b.type = 'image' THEN i.src 
        ELSE b.content_text 
    END AS content
FROM sections s
LEFT JOIN section_bits b ON s.id = b.section_id
LEFT JOIN images i ON b.image_id = i.id
WHERE s.id = ?
ORDER BY b.position ASC;
	`

	// for each section
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
			bits = append(bits, bit)
		}
		sections[i].SectionBits = bits
	}
	return sections, nil
}
