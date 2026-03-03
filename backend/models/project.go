package models

import (
	"time"

	"my.de/rest-api/db"
)

type Project struct {
	ID            int64
	Title         string `binding:"required"`
	DateTime      time.Time
	Description   string
	Collaborators string
	Project_URL   string
	Hero_src      string
	Thumbnail_src string
	Tags          string
}
type Section struct {
	Layout   int          `json:"layout"`
	Elements []SectionBit `json:"elements"`
}
type SectionBit struct{}

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
	result, err := stmt.Exec(project.Title, project.Description, project.DateTime, project.Collaborators, project.Project_URL, project.Hero_src, project.Thumbnail_src)
	if err != nil {
		return err
	}
	id, err := result.LastInsertId()
	project.ID = id
	return err
}

func GetAllProjects() ([]Project, error) {
	query := `
	SELECT
		p.id,
    p.title, 
    p.date, 
    p.description,
		p.collaborators,
		p.project_url,
    h.src AS hero_src,
    i.src AS thumbnail_src,
		GROUP_CONCAT(t.name) AS tags
		FROM projects p
		LEFT JOIN images h ON p.hero_image_id = h.id
		LEFT JOIN images i ON p.thumbnail_id = i.id
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
		err := rows.Scan(&project.ID, &project.Title, &dateStr, &project.Description, &project.Collaborators, &project.Project_URL, &project.Hero_src, &project.Thumbnail_src, &project.Tags)
		if err != nil {
			return nil, err
		}
		project.DateTime, err = time.Parse("2006-01-02 15:04:05", dateStr)
		if err != nil {
			return nil, err
		}
		projects = append(projects, project)
	}

	return projects, nil
}

func GetProjectById(id int64) (*Project, error) {
	query := `SELECT * FROM projects WHERE id = ?`
	row := db.DB.QueryRow(query, id)

	var project Project
	err := row.Scan(&project.ID, &project.Title, &project.Description, &project.DateTime, &project.Collaborators, &project.Project_URL, &project.Hero_src, &project.Thumbnail_src)
	if err != nil {
		return nil, err
	}
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

	_, err = stmt.Exec(&project.ID, &project.Title, &project.Description, &project.DateTime, &project.Collaborators, &project.Project_URL, &project.Hero_src, &project.Thumbnail_src)

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
