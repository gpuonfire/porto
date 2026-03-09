package models

import (
	"strings"
	"time"

	"my.de/rest-api/db"
	"my.de/rest-api/utils"
)

type Project struct {
	ID            int64     `json:"id"`
	Title         string    `json:"title" binding:"required"`
	DateTime      time.Time `json:"dateTime"`
	Description   string    `json:"description"`
	Collaborators string    `json:"collaborators"`
	ProjectURL    string    `json:"projectUrl"`
	HeroImg       Image     `json:"heroSrc"`
	ThumbnailImg  Image     `json:"thumbnailSrc"`
	Tags          []string  `json:"tags"`
	Sections      []Section `json:"sections"`
}

var projects = []Project{}

func (project Project) Save() error {
	query := `
	INSERT INTO projects(name, description, location, dateTime, user_id) 
	VALUES (?, ?, ?, ?, ?)`
	stmt, err := db.DB.Prepare(query)
	if err != nil {
		return err
	}
	defer stmt.Close()
	result, err := stmt.Exec(project.Title, project.Description, project.DateTime, project.Collaborators, project.ProjectURL, project.HeroImg, project.ThumbnailImg)
	if err != nil {
		return err
	}
	id, err := result.LastInsertId()
	project.ID = id
	return err
}

func GetAllProjects() ([]Project, error) {
	utils.Debug("Get projects...")
	query := `
	SELECT
		p.id,
		p.title, 
		p.created, 
		p.description,
		p.collaborators,
		p.project_url,
		GROUP_CONCAT(t.name) AS tags,
		i.name AS thumbnail_name,
		i.src AS thumbnail_src,
		i.alt AS thumbnail_alt,
		h.name AS hero_img_name,
		h.src AS hero_img_src,
		h.alt AS hero_img_alt
	FROM projects p
	LEFT JOIN images h ON p.hero_image_name = h.name
	LEFT JOIN images i ON p.thumbnail_name = i.name
	LEFT JOIN project_tags pt ON p.id = pt.project_id
	LEFT JOIN tags t ON pt.tag_id = t.id
	GROUP BY p.id
		`
	rows, err := db.DB.Query(query)
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var projects []Project
	for rows.Next() {
		var project Project
		var dateStr string
		var tagsStr string
		var thumbImg Image
		var heroImg Image

		err := rows.Scan(&project.ID, &project.Title, &dateStr, &project.Description, &project.Collaborators, &project.ProjectURL, &tagsStr, &thumbImg.Name, &thumbImg.Src, &thumbImg.Alt, &heroImg.Name, &heroImg.Src, &heroImg.Alt)
		if err != nil {
			return nil, err
		}
		project.DateTime, err = time.Parse("2006-01-02 15:04:05", dateStr)
		if err != nil {
			return nil, err
		}
		utils.Debug("Project ID %d: Tags string: '%s'", project.ID, tagsStr)
		if tagsStr != "" {
			project.Tags = strings.Split(tagsStr, ",")
		} else {
			project.Tags = []string{}
		}
		project.ThumbnailImg = thumbImg
		project.HeroImg = heroImg

		projects = append(projects, project)
	}

	return projects, nil
}

func GetProjectById(id int64) (*Project, error) {
	query := `
		SELECT
			p.id,
			p.title, 
			p.created, 
			p.description,
			p.collaborators,
			p.project_url,
			GROUP_CONCAT(t.name) AS tags,
			i.name AS thumbnail_name,
			i.src AS thumbnail_src,
			i.alt AS thumbnail_alt,
			h.name AS hero_img_name,
			h.src AS hero_img_src,
			h.alt AS hero_img_alt
		FROM projects p
		LEFT JOIN images h ON p.hero_image_name = h.name
		LEFT JOIN images i ON p.thumbnail_name = i.name
		LEFT JOIN project_tags pt ON p.id = pt.project_id
		LEFT JOIN tags t ON pt.tag_id = t.id
		WHERE p.id = ?`
	row := db.DB.QueryRow(query, id)

	var project Project
	var dateStr string
	var tagsStr string
	var thumbImg Image
	var heroImg Image
	err := row.Scan(&project.ID, &project.Title, &dateStr, &project.Description, &project.Collaborators, &project.ProjectURL, &tagsStr, &thumbImg.Name, &thumbImg.Src, &thumbImg.Alt, &heroImg.Name, &heroImg.Src, &heroImg.Alt)
	if err != nil {
		return nil, err
	}
	project.DateTime, err = time.Parse("2006-01-02 15:04:05", dateStr)
	if err != nil {
		return nil, err
	}
	if tagsStr != "" {
		project.Tags = strings.Split(tagsStr, ",")
	} else {
		project.Tags = []string{}
	}

	project.ThumbnailImg = thumbImg
	project.HeroImg = heroImg

	return &project, nil
}

func (project Project) Update() error {
	query := `
	UPDATE projects
	SET name = ?, description = ?, location = ?, dateTime = ?
	WHERE id = ?
	`
	stmt, err := db.DB.Prepare(query)
	if err != nil {
		return err
	}
	defer stmt.Close()

	_, err = stmt.Exec(&project.ID, &project.Title, &project.Description, &project.DateTime, &project.Collaborators, &project.ProjectURL, &project.HeroImg, &project.ThumbnailImg)

	return err
}

func (project Project) Delete() error {
	query := `DELETE FROM projects WHERE id = ?`
	stmt, err := db.DB.Prepare(query)
	if err != nil {
		return err
	}

	defer stmt.Close()

	_, err = stmt.Exec(project.ID)
	return err
}
