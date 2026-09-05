package models

import (
	"database/sql"

	"my.de/rest-api/db"
)

type ContentBit struct {
	ID       string `json:"-"`
	Position int32  `json:"position"`
	Type     string `json:"type" binding:"required"`
	Styling  string `json:"styling"`
	Text     string `json:"text" binding:"required"`
	Image    Image  `json:"image" binding:"required"`
}

func GetProjectContent(projectId string) ([]ContentBit, error) {
	query := `
	SELECT
		c.position,
		c.type AS type,
		c.styling,
		c.text_content,
		i.id AS img_id,
		i.src AS img_src,
		i.alt AS img_alt
		FROM projects p
	  LEFT JOIN content_bits c ON p.id = c.project_id
		LEFT JOIN images i ON c.image_name = i.id
		WHERE p.id = ?
		ORDER BY c.position ASC;
	`
	rows, err := db.DB.Query(query, projectId)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var bits []ContentBit
	for rows.Next() {
		var bit ContentBit
		var textContent, imgID, imgSrc, imgAlt sql.NullString

		err := rows.Scan(&bit.Position, &bit.Type, &bit.Styling, &textContent, &imgID, &imgSrc, &imgAlt)
		if err != nil {
			return nil, err
		}

		bit.Text = textContent.String
		if imgID.Valid {
			bit.Image = Image{
				ID:  imgID.String,
				Src: imgSrc.String,
				Alt: imgAlt.String,
			}
		}
		bits = append(bits, bit)
	}
	return bits, nil
}
