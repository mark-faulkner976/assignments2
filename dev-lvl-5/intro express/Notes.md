# Intro to Express

    # Initialize a new node package
    - npm init -y
 
    - npm install <dependencies> (eg: express)


    # Vocabulary

        # Route
            * Like an event listener for http requests

        # Endpoint
            * "/item"  "/user"

        # Port
            * localhost:9000/ (stay above 3000 and below 9000)

        # Nodemon
            * npm install -g nodemon

# intro to REST API architecture

    # Rest
        REpresentational State Transfer
        requsets are intuitive

    # Resource
        single item (object) in a databse
        /user/9876545
    
    # Collection 
        collection of similar items in a database
        /users

    # Base (root) URL
        http://amazon.com/

    # API Endpoint
        http://amazon.com/movies/s6df5g465r

    # Parameters
        /movies/:movieId

    #Query (query string) 
        /movies?genre=action&year=1999

    # Client
        front end

    # Server 
        intermediary

    # Request Method 
        CRUD - GET POST PUT DELETE

# express router
    - enables us to modularize our routes in express

# Middleware
    What do?
        basically handles the inbetween convo of the server and front end app
        app.use(1, 2)
            1. optional mount path ( endpoint )
            2. Callback function - rcvs the request, response objects, also the 'next' function

        the next function
            * moves on to the middleware in line on our server
    