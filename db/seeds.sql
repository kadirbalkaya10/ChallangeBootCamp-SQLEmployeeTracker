-- SEED DATA

DO $$

BEGIN
-- Inserting data into department
INSERT INTO department (name) 
    VALUES
    ('Engineering'),
    ('Finance'),
    ('Sales'),
    ('Human Resources');

-- Inserting data into role
INSERT INTO role (title,salary,department_id)
    VALUES
    ('Chief Engineer', 175000, 1),
    ('Account Manager' , 80000, 2),
    ('Sales Lead', 120000, 3),
    ('HR Manager', 90000, 4);

-- Inserting data into employee
    INSERT INTO employee(first_name,last_name,role_id,manager_id)
    VALUES
    ('Tony','Stark',1,NULL),
    ('Tony','Montana',2,NULL),
    ('Jordan','Belfort',3,NULL),
    ('Arthur','Morgan',4,NULL);


    EXCEPTION WHEN OTHERS THEN -- Handle any unexpected errors
    ROLLBACK;
    RAISE EXCEPTION '%', SQLERRM ;

     

END$$;