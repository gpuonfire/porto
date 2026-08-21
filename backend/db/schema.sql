PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS project_tags;
DROP TABLE IF EXISTS sections;
DROP TABLE IF EXISTS section_bits;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS categories;

CREATE TABLE images(
    id TEXT PRIMARY KEY,
    src TEXT NOT NULL,
    alt TEXT,
    width INTEGER,        -- e.g., 1920
    height INTEGER,       -- e.g., 1080
    aspect_ratio REAL,     -- e.g., 1.777 (width / height)
    category TEXT,
	  FOREIGN KEY (category) REFERENCES categories(name)
);

CREATE TABLE categories(
    name TEXT PRIMARY KEY
);

CREATE TABLE projects(
	 id TEXT PRIMARY KEY, -- String ID wie "e-comerce"
	 title TEXT NOT NULL,
	 created TEXT,
	 description TEXT,
	 collaborators TEXT,
	 project_url TEXT,
	 hero_img_name TEXT,
	 thumbnail_img_name TEXT,
	 FOREIGN KEY (hero_img_name) REFERENCES images(id),
	 FOREIGN KEY (thumbnail_img_name) REFERENCES images(id)
	);

	CREATE TABLE tags(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT UNIQUE
	);

	CREATE TABLE project_tags(
		project_id TEXT,
		tag_id INTEGER,
		PRIMARY KEY (project_id, tag_id),
		FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
		FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
	);

	CREATE TABLE sections(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		project_id TEXT,
		layout INTEGER DEFAULT 0,
		position INTEGER, -- Um die Reihenfolge der Sections zu speichern
		FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
    UNIQUE(project_id, position)
	);

	CREATE TABLE section_bits(
		section_id INTEGER,
    position INTEGER,  -- Reihenfolge innerhalb der Section
		type TEXT, -- 'title', 'smallTitle', 'text', 'image', 'graphic'
		text_content TEXT, -- Speichert Textinhalt oder Grafik-Namen
		image_name TEXT,  -- Nur gefüllt, wenn type = 'image'
    PRIMARY KEY (section_id, position),
		FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE,
		FOREIGN KEY (image_name) REFERENCES images(id)
	);
