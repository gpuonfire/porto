SELECT 
    p.title, 
    p.date, 
    p.description,
    h.src AS hero_src,
    t.name AS tag_name,
    s.layout,
    sb.type AS element_type,
    sb.content_text
FROM projects p
LEFT JOIN images h ON p.hero_img_id = h.id
LEFT JOIN project_tags pt ON p.id = pt.project_id
LEFT JOIN tags t ON pt.tag_id = t.id
LEFT JOIN sections s ON p.id = s.project_id
LEFT JOIN section_bits sb ON s.id = sb.section_id
WHERE p.id = 1
ORDER BY s.position, sb.position;
