Basic Rule of this repository

1. upload and edit your part in your personal branch
    (!!DO NOT UPLOAD or UPDATE YOUR GIT in OTHER BRANCH)
2. After the agreement, we can push our git into Main branch.



TO DO LIST for the frontend part of Agile1.0
 
    <the main goal of the Agile1.0>
    1. basic HTML and CSS frame of the web application 
    2. Comment button click event
        1. click the event handler in comment.js to ask post request to the backend (ajax)
        2. after the successful response, clear the comment window
    3. Comment Dropbar change event
        1. change event handler in comment.js to ask get request to the backend.
        2. show the response on the window.
    4. like button click event
        1. post request 
        2. button number +
    5. vote button click event
        1. post request 
        2. get request 
        3. visualize the result 
    6. ifcviwer button click event
        1. update the ifcviwer with the certain model
        2. result update (ajax)
        3. comment update (ajax)
    7. **on load event in HTML (1)**
        1. `<body onload=“init();”>`
        2. call init() function in HTML
            1. Call ifc viewer function
            2. updateResult ajax
                1. Request result and change HTML dom to update the result (comments)
                2. Create a function to update result information in HTML (fake info)
            3. update comment ajax

---------------------------------------------------
Requirements for the frontend dev
1. API definition (endpoint)
2. Modified ER
3. DB and Server schdeule (for ajax)
4. Finalized HTML tags and name.


Tasks category
1. ui/ux design
2. ifc viewer 
3. cityGML viwer
4. ajax for comments and votes
