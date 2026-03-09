package models

import (
	"my.de/rest-api/db"
)

type Image struct {
	Name        string  `json:"name" binding:"required"`
	Src         string  `json:"src" binding:"required"`
	Alt         string  `json:"alt"`
	Width       int     `json:"width"`
	Height      int     `json:"height"`
	AspectRatio float64 `json:"aspectRatio"`
	Category    string  `json:"category"`
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

func getImageByName(imageName string) (*Image, error) {
	query := `
	SELECT name, src, alt, width, height, aspect_ratio, category
	FROM images
	WHERE name = ? 
	`
	row := db.DB.QueryRow(query, imageName)

	var img Image
	err := row.Scan(&img.Name, &img.Src, &img.Alt, &img.Width, &img.Height, &img.AspectRatio, &img.Category)
	if err != nil {
		return nil, err
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
