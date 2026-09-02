PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS content_bits;
DROP TABLE IF EXISTS images;
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
	 url TEXT,
   tags TEXT,
	 hero_img_name TEXT,
	 thumbnail_img_name TEXT,
	 FOREIGN KEY (hero_img_name) REFERENCES images(id),
	 FOREIGN KEY (thumbnail_img_name) REFERENCES images(id)
	);

	CREATE TABLE content_bits(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		project_id TEXT,
    position INTEGER,  -- Reihenfolge
		type TEXT, -- 'title', 'smallTitle', 'text', 'image', 'graphic'
		styling TEXT, -- 
		text_content TEXT, -- Speichert Textinhalt oder Grafik-Namen
		image_name TEXT,  -- Nur gefüllt, wenn type = 'image'
		FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
		FOREIGN KEY (image_name) REFERENCES images(id),
    UNIQUE(project_id, position)
	);
