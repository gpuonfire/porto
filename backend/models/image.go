package models

import (
	"database/sql"

	"my.de/rest-api/db"
	"my.de/rest-api/utils"
)

type Image struct {
	Name        string  `json:"name" binding:"required"`
	Src         string  `json:"src" binding:"required"`
	Alt         string  `json:"alt"`
	Width       int64   `json:"width"`
	Height      int64   `json:"height"`
	AspectRatio float64 `json:"aspectRatio"`
	Category    string  `json:"category"`
}

func GetImageByName(imageName string) (*Image, error) {
	query := `
	SELECT name, src, alt, width, height, aspect_ratio, category
	FROM images
	WHERE name = ? 
	`
	row := db.DB.QueryRow(query, imageName)

	var img Image
	var w, h sql.NullInt64
	var a sql.NullFloat64
	var c sql.NullString

	err := row.Scan(&img.Name, &img.Src, &img.Alt, &w, &h, &a, &c)
	if err != nil {
		return nil, err
	}

	if w.Valid {
		img.Width = w.Int64
	}
	if h.Valid {
		img.Height = h.Int64
	}
	if a.Valid {
		img.AspectRatio = a.Float64
	}
	if img.Width == 0 || img.Height == 0 || img.AspectRatio == 0 {
		img.Width = 0
		img.Height = 0
		img.AspectRatio = 0
		utils.Debug("Image with name ", imageName, " has invalid dimensions or aspect ratio")
	}
	if c.Valid {
		img.Category = c.String
	}
	return &img, nil
}

func getImageById(imgId int64) (*Image, error) {
	query := `
	SELECT name, src, alt, width, height, aspect_ratio, category
	FROM images
	WHERE id = ? 
	`
	row := db.DB.QueryRow(query, imgId)

	var img Image
	err := row.Scan(&img.Name, &img.Src, &img.Alt, &img.Width, &img.Height, &img.AspectRatio, &img.Category)
	if err != nil {
		return nil, err
	}

	return &img, nil
}

func GetAllImages() (*[]Image, error) {
	query := `
	SELECT name, src, alt, width, height, aspect_ratio, category
	FROM images
	ORDER BY category
	`
	rows, err := db.DB.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var images []Image
	for rows.Next() {
		var img Image
		var w, h sql.NullInt64
		var a sql.NullFloat64
		var c sql.NullString

		err := rows.Scan(&img.Name, &img.Src, &img.Alt, &w, &h, &a, &c)
		if err != nil {
			return nil, err
		}

		if w.Valid {
			img.Width = w.Int64
		}
		if h.Valid {
			img.Height = h.Int64
		}
		if a.Valid {
			img.AspectRatio = a.Float64
		}
		if img.Width == 0 || img.Height == 0 || img.AspectRatio == 0 {
			img.Width = 0
			img.Height = 0
			img.AspectRatio = 0
			utils.Debug("Image with name ", img.Name, " has invalid dimensions or aspect ratio")
		}
		if c.Valid {
			img.Category = c.String
		}
		images = append(images, img)
	}
	return &images, nil
}

func getImagesByCategory(category string) ([]Image, error) {
	query := `
		SELECT name, src, alt, width, height, aspect_ratio, category
		FROM images
		WHERE category = ?
		`
	var images []Image
	rows, err := db.DB.Query(query)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		var image Image
		err := rows.Scan(&image.Name, &image.Src, &image.Alt, &image.Width, &image.Height, &image.AspectRatio, &image.Category)
		if err != nil {
			return nil, err
		}
		images = append(images, image)
	}
	return images, nil
}
