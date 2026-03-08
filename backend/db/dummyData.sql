-- 1. Insert Images
INSERT INTO images (id, src, alt, width, height, aspect_ratio) VALUES 
(1,'https://www.tha.de/homes/sim0n/media/img/Renders/tank.jpg', 'Hero image of the tank', 1920, 1080, 1.777),
(2,'https://www.tha.de/homes/sim0n/media/img/Drawings/die_ich_rief_poster.jpg', 'Thumbnail poster', 800, 1200, 0.666),
(3,'https://tha.de/homes/sim0n/media/img/Renders/tempel11.jpg', 'Temple render', 1080, 1080, 1.0),
(4,'https://tha.de/homes/sim0n/media/img/Renders/tempel9.jpg', 'Temple render 9', NULL, NULL, NULL),
(5,'https://tha.de/homes/sim0n/media/img/Renders/tempel6.jpg', 'Temple render 6', NULL, NULL, NULL),
(6,'https://tha.de/homes/sim0n/media/img/Drawings/img%20(21).jpg', 'Drawing 21', NULL, NULL, NULL),
(7,'https://tha.de/homes/sim0n/media/img/Drawings/img%20(26).jpg', 'Drawing 26', NULL, NULL, NULL),
(8,'https://tha.de/homes/sim0n/media/img/Drawings/Plakat%20Steve%20Jobs.jpg', 'Steve Jobs poster', NULL, NULL, NULL);



-- 2. Insert Project
INSERT INTO projects (id, title, date, description, collaborators, project_url, hero_image_id, thumbnail_id) 
VALUES 
 (1, 'VIRTUAL AQUARIUM', '2025-01-02 15:04:05', 'This comprehensive e-commerce platform...', 'Kowalski, Pummelove', 'https://www.schlaubeere.de', 1, 2),
 (2, 'Temple Project', '2026-01-02 09:04:05', 'Ancient temple visualization project', 'Design Team', 'https://example.com/temple', 4, 5);

-- 3. Insert Tags
INSERT INTO tags (name) VALUES 
  ('react'), 
  ('java'),
  ('p5JS'), 
  ('TS'), 
  ('JavaScript'),
  ('architecture'),
  ('3d-rendering'), 
  ('digital-art');


-- 4. Link Tags to Project
INSERT INTO project_tags (project_id, tag_id) VALUES 
   (1, 1), 
  (1, 2), 
  (1, 3), 
  (1, 4),
  (2, 5), 
  (2, 6), 
  (2, 7), 
  (2, 8);

-- 5. Insert a Section
INSERT INTO sections (id, project_id, layout, position) VALUES 
 (1, 1, 0, 0),
 (2, 2, 1, 0),
 (3, 2, 2, 1);

-- 6. Insert Section Bits (Elements)
INSERT INTO section_bits (section_id, type, content_text, image_id, position) VALUES
(1, 'title', 'Hier ist ein Titel!', NULL, 0),
(1, 'image', NULL, 3, 1),
(1, 'text', 'layout 1 hallo ich bin ein langer text...', NULL, 2),
(2, 'title', 'Temple Visualization Project', NULL, 0),
(2, 'text', 'This project showcases ancient temple designs through 3D rendering and digital art.', NULL, 1),
(2, 'image', NULL, 6, 2),  -- Drawing 21
(3, 'image', NULL, 7, 0),  -- Drawing 26
(3, 'image', NULL, 8, 1);  -- Steve Jobs poster
