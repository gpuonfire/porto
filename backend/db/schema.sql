PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    src TEXT UNIQUE,
    alt TEXT,
    width INTEGER,        -- e.g., 1920
    height INTEGER,       -- e.g., 1080
    aspect_ratio REAL     -- e.g., 1.777 (width / height)
);

CREATE TABLE IF NOT EXISTS projects (
	 id INTEGER PRIMARY KEY, -- String ID wie "e-comerce"
	 title TEXT NOT NULL,
	 date TEXT,
	 description TEXT,
	 collaborators TEXT,
	 project_url TEXT,
	 hero_image_id INTEGER,
	 thumbnail_id INTEGER,
	 FOREIGN KEY (hero_image_id) REFERENCES images(id),
	 FOREIGN KEY (thumbnail_id) REFERENCES images(id)
	);

	CREATE TABLE IF NOT EXISTS tags (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT UNIQUE
	);

	CREATE TABLE IF NOT EXISTS project_tags (
		project_id INTEGER,
		tag_id INTEGER,
		PRIMARY KEY (project_id, tag_id),
		FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
		FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
	);

	CREATE TABLE IF NOT EXISTS sections (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		project_id INTEGER,
		layout INTEGER DEFAULT 0,
		position INTEGER, -- Um die Reihenfolge der Sections zu speichern
		FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
    UNIQUE(project_id, position)
	);

	CREATE TABLE IF NOT EXISTS section_bits (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		section_id INTEGER,
		type TEXT, -- 'title', 'smallTitle', 'text', 'image', 'graphic'
		content_text TEXT, -- Speichert Textinhalt oder Grafik-Namen
		image_id INTEGER,  -- Nur gefüllt, wenn type = 'image'
		position INTEGER,  -- Reihenfolge innerhalb der Section
		FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE,
		FOREIGN KEY (image_id) REFERENCES images(id)
    UNIQUE(section_id, position)
	);
