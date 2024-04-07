-- SEED DATA


-- Inserting data into department
INSERT INTO department (name) 
    VALUES
    ('Engineering'),
    ('Finance'),
    ('Sales'),
    ('Human Resources');

-- Inserting data into role
INSERT INTO role (title,salary,department)
    VALUES
    ('Chief Engineer', 175000,1),
    ('Account Manager' , 80000,2),
    ('Sales Lead', 120000,3),
    ('HR Manager', 90000,4);

-- Inserting data into employee
    INSERT INTO employee(first_name,last_name,role_id,maneger_id)
    VALUES
    ('Tony',"Stark",1,NULL),
    ('Tony',"Montana",1,NULL),
    ('Jordan',"Belfort",1,NULL),
    ('Arthur',"Morgan",1,NULL);
