(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"outer-outlet\">\r\n    <router-outlet></router-outlet>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/database/database.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/database/database.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<button (click)=\"getUsers()\">GetAllUsers</button>\r\n<button (click)=\"getGroups()\">GetAllGroups</button>\r\n<button (click)=\"getGroupByTheID(searchInput.value)\">GroupSearchByID</button>\r\n<input #searchInput placeholder=\"Enter id here\" (keyup.enter)=\"getUserByTheID(searchInput.value)\">\r\n<button (click)=\"getUserByTheID(searchInput.value)\">UserSearchByID</button>\r\n<div class=\"multi_lines_text\">{{ data }}</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>friends works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <!-- Google Font Linking -->\r\n    <link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Open+Sans\" />\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n\r\n    <title>GROUPS</title>\r\n    <style>\r\n        html * {\r\n            font-family: 'Source Sans Pro', sans-serif;\r\n            ;\r\n        }\r\n\r\n        .bg-1 {\r\n            background-color: #ffffff;\r\n            color: #154360;\r\n        }\r\n\r\n        .bg-2 {\r\n            background-color: #45b39d;\r\n            color: #ffffff;\r\n        }\r\n\r\n        .container {\r\n            padding: 15px;\r\n        }\r\n\r\n        .container-fluid {\r\n            padding-top: 48px;\r\n            padding-bottom: 48px;\r\n        }\r\n\r\n        .container-fluid-footer {\r\n            padding-top: 36px;\r\n            padding-bottom: 36px;\r\n        }\r\n\r\n        .container-fluid-header {\r\n            padding-top: 12px;\r\n            padding-bottom: 12px;\r\n            padding-left: 12px;\r\n        }\r\n\r\n        .navbar {\r\n            padding-top: 12px;\r\n            padding-bottom: 12px;\r\n            border: 0;\r\n            border-radius: 0;\r\n            margin-bottom: 0;\r\n            font-size: 12px;\r\n            letter-spacing: 5px;\r\n            background-color: #154360 !important;\r\n        }\r\n        /* Navbar items to the right */\r\n        .ml-auto .dropdown-menu {\r\n            left: auto !important;\r\n            right: 0px;\r\n        }\r\n\r\n        .navbar-nav li a:hover {\r\n            color: #45b39d !important;\r\n        }\r\n    </style>\r\n</head>\r\n<body>\r\n    <!-- Navbar -->\r\n    <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\">\r\n            <img src=\"assets/img/logoblue.png\" class=\"rounded-circle\" alt=\"Logo\" style=\"width: 40px;\">\r\n        </a>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/search\" routerLinkActive=\"active\">SEARCH</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/friends\" routerLinkActive=\"active\">FRIENDS</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/groups\" routerLinkActive=\"active\">GROUPS</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/database\" routerLinkActive=\"active\">DEV-DATABASE</a>\r\n            </li>\r\n        </ul>\r\n\r\n    </nav>\r\n    <div class=\"container-fluid-header bg-1 text-left\">\r\n        <h2 class=\"margin\">GROUPS</h2>\r\n    </div>\r\n    <div>\r\n        <input #groupInput placeholder=\"Enter Group Name\">\r\n        <button (click)=\"createGroup(groupInput.value)\">Create New Group</button>\r\n        <ul class=\"groups\">\r\n\r\n            <li *ngFor=\"let group of groups\"><button (click)=\"leaveGroup(group.id)\">Leave</button>Group:  {{group.name}}   Users: {{group.userIDs}}\r\n            </li>\r\n        </ul>\r\n    </div>\r\n\r\n\r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n</body>\r\n</html>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!doctype html>\r\n<html lang=\"en\">\r\n<head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <!-- Google Font Linking -->\r\n    <link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\" rel=\"stylesheet\">\r\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"//fonts.googleapis.com/css?family=Open+Sans\" />\r\n    <title>Split Check</title>\r\n    <style>\r\n        html * {\r\n            font-family: 'Source Sans Pro', sans-serif;\r\n        }\r\n\r\n        /* input fields */\r\n        input[type=text], input[type=password] {\r\n            width: 100%;\r\n            padding: 10px 20px;\r\n            margin: 8px 0;\r\n            display: inline-block;\r\n            border: 1px solid #ccc;\r\n            box-sizing: border-box;\r\n        }\r\n\r\n        .bg-1 {\r\n            background-color: #45b39d;\r\n            color: #ffffff;\r\n        }\r\n\r\n        .bg-2 {\r\n            background-color: #a2d9ce;\r\n            color: #ffffff;\r\n        }\r\n\r\n        .bg-3 {\r\n            background-color: #45b39d;\r\n            color: #ffffff;\r\n        }\r\n\r\n        .container-fluid {\r\n            padding-top: 48px;\r\n            padding-bottom: 48px;\r\n        }\r\n\r\n        .container-fluid-footer {\r\n            padding-top: 36px;\r\n            padding-bottom: 36px;\r\n        }\r\n\r\n        /* buttons */\r\n        button {\r\n            background-color: #154360;\r\n            color: white;\r\n            padding: 10px 24px;\r\n            margin: 8px 0;\r\n            border: none;\r\n            cursor: pointer;\r\n            width: 100%;\r\n        }\r\n\r\n            button:hover {\r\n                opacity: 80%;\r\n            }\r\n\r\n        .cancelbtn {\r\n            width: auto;\r\n            margin: 0 auto;\r\n            padding: 10px 19px;\r\n            background-color: #c0392b;\r\n        }\r\n\r\n        /* modal image and close button position */\r\n        .imgcontainer {\r\n            text-align: center;\r\n            margin: 24px 0 12px 0;\r\n            position: relative;\r\n        }\r\n\r\n        img.avatar {\r\n            width: 40%;\r\n            border-radius: 50%;\r\n        }\r\n\r\n        img {\r\n            padding: 10px 10px;\r\n        }\r\n\r\n        .container {\r\n            padding: 15px;\r\n        }\r\n\r\n        span.psw {\r\n            float: right;\r\n            padding-top: 15px;\r\n        }\r\n\r\n        /* modal background */\r\n        .modal {\r\n            display: none; /* hidden by default*/\r\n            position: fixed; /* stay in place */\r\n            z-index: 1; /* sit on top */\r\n            left: 0;\r\n            top: 0;\r\n            width: 100%;\r\n            height: 100%;\r\n            overflow: auto; /* enable scroll if needed */\r\n            background-color: rgb(0,0,0);\r\n            background-color: rgb(0,0,0,0.4);\r\n            padding-top: 50px;\r\n        }\r\n        /* modal content box */\r\n        .model-content {\r\n            background-color: #fefefe;\r\n            margin: 5% auto 15% auto; /* 5% from top, 15% from bottom, centered*/\r\n            border: 1px solid #888;\r\n            width: 80%;\r\n        }\r\n        /* modal button x */\r\n        .close {\r\n            position: absolute;\r\n            right: 25px;\r\n            top: 0px;\r\n            color: #000;\r\n            font-size: 35px;\r\n            font-weight: bond;\r\n        }\r\n\r\n            .close:hover,\r\n            .close:focus {\r\n                color: #c0392b;\r\n                cursor: pointer;\r\n            }\r\n\r\n        /* zoom animation*/\r\n        .animate {\r\n            -webkit-animation: animatezoom 0.6s;\r\n            animation: animatezoom 0.6s;\r\n        }\r\n\r\n        @-webkit-keyframes animatezoom {\r\n            from {\r\n                -webkit-transform: scale(0)\r\n            }\r\n\r\n            to {\r\n                -webkit-transform: scale(1)\r\n            }\r\n        }\r\n\r\n        @keyframes animatezoom {\r\n            from {\r\n                transform: scale(0)\r\n            }\r\n\r\n            to {\r\n                transform: scale(1)\r\n            }\r\n        }\r\n\r\n        /* change styles for span and cancel buttons on smaller screens */\r\n        @media screen and (max-width: 300px) {\r\n            span.psw {\r\n                display: block;\r\n                float: none;\r\n            }\r\n\r\n            .cancelbtn {\r\n                width: 100%;\r\n            }\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <div class=\"container-fluid bg-1 text-center\">\r\n        <h1>Welcome to Split Check!</h1>\r\n        <img src=\"./assets/img/logoblue.png\" class=\"rounded-circle\" alt=\"Logo\" width=\"350\" height=\"350\">\r\n        <h4>A web app that makes going out to eat with your friends easier.</h4>\r\n        <p>Split check provides an easy solution to synchronously splitting and paying for checks from group outings through Venmo. It utilizes Yelp to suggest restaurants for groups to go to based on an average spending budget calculated using each users Venmo transaction history or by a user-inputed value. The user-host is given full control of making such decisions to ensure everyone can enjoy a fun, friendly outing!</p>\r\n        <button class=\"loginBtn loginBtn--google\" (click)=\"signinWithGoogle()\">\r\n            Login with Google\r\n        </button>\r\n        <div id=\"multi_lines_text\">{{ data }}</div>\r\n    </div>\r\n    \r\n    <div id=\"id01\" class=\"modal\">\r\n        <form class=\"model-content animate\" action=\"/action_page.php\" method=\"POST\">\r\n            <div class=\"imgcontainer\">\r\n                <span onclick=\"document.getElementById('id01').style.display='none'\" class=\"close\" title=\"Close\">&times;</span>\r\n                <img src=\"./assets/img/logoblue.png\" alt=\"Logo\" class=\"avatar\">\r\n            </div>\r\n\r\n            <div class=\"container bg-3\">\r\n                <label for=\"username\"><b>Username</b></label>\r\n                <input type=\"text\" placeholder=\"Enter Username\" name=\"username\" required>\r\n                <label for=\"password\"><b>Password</b></label>\r\n                <input type=\"password\" placeholder=\"Enter Password\" name=\"password\" required>\r\n\r\n                <!-- NEED TO VERIFY TO LOG IN -->\r\n                <button type=\"submit\">Login</button>\r\n\r\n                <label>\r\n                    <input type=\"checkbox\" checked=\"checked\" name=\"rememberme\"> Remember me\r\n                </label>\r\n            </div>\r\n\r\n            <div class=\"container bg-3\" style=\"background-color:#ffffff;\">\r\n                <button type=\"button\" onclick=\"document.getElementById('id01').style.display='none'\" class=\"cancelbtn\">Cancel</button>\r\n                <span class=\"psw\"><a href=\"https://venmo.com/signup\" target=\"-blank\">Forgot password?</a></span>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <script>\r\n        // get modal\r\n        var modal = document.getElementById('id01');\r\n\r\n        //close modal if user clicks outside of it\r\n        window.onclick = function (event) {\r\n            if (event.target == modal) {\r\n                modal.style.display = \"none\";\r\n            }\r\n        }\r\n    </script>\r\n\r\n\r\n    <div class=\"container-fluid-footer bg-2 text-center\">\r\n        <p>CS411 Group 1: Wyatt Howe, Noah Cohen, Michelle Lee, Andre Pires</p>\r\n    </div>\r\n\r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n</body>\r\n</html>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <!-- Required meta tags -->\r\n    <meta charset=\"utf-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n\r\n    <!-- Bootstrap CSS -->\r\n    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\r\n\r\n    <!-- Google Font Linking -->\r\n    <link href=\"https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap\" rel=\"stylesheet\">\r\n\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js\"></script>\r\n    \r\n    <title>USER</title>\r\n    <style>\r\n        html * {\r\n            font-family: 'Source Sans Pro', sans-serif;\r\n        }\r\n        .bg-1 {\r\n            background-color: #ffffff;\r\n            color: #154360; \r\n        }\r\n        .bg-2 {\r\n            background-color: #45b39d;\r\n            color: #ffffff;\r\n        }\r\n\r\n        .container {\r\n            padding: 15px;\r\n        }\r\n        .container-fluid {\r\n            padding-top: 48px;\r\n            padding-bottom: 48px;\r\n        }\r\n        .container-fluid-footer {\r\n            padding-top: 36px;\r\n            padding-bottom: 36px;\r\n        }\r\n        .container-fluid-header {\r\n            padding-top: 12px;\r\n            padding-bottom: 12px;\r\n            padding-left: 12px;\r\n        }\r\n        \r\n        .navbar {\r\n            padding-top: 12px;\r\n            padding-bottom: 12px;\r\n            border: 0;\r\n            border-radius: 0;\r\n            margin-bottom: 0;\r\n            font-size: 12px;\r\n            letter-spacing: 5px;\r\n            background-color: #154360 !important;\r\n        }\r\n        /* Navbar items to the right */\r\n        .ml-auto .dropdown-menu {\r\n            left: auto !important;\r\n            right: 0px;\r\n        }\r\n        .navbar-nav li a:hover {\r\n            color: #45b39d !important;\r\n        }\r\n\r\n    </style>\r\n  </head>\r\n  <body>\r\n    <!-- Navbar -->\r\n    <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\">\r\n        <a class=\"navbar-brand\" routerLink=\"/\">\r\n            <img src=\"assets/img/logoblue.png\" class=\"rounded-circle\" alt=\"Logo\" style=\"width: 40px;\">\r\n        </a>\r\n        <ul class=\"navbar-nav ml-auto\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/search\" routerLinkActive=\"active\">SEARCH</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/friends\" routerLinkActive=\"active\">FRIENDS</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/groups\" routerLinkActive=\"active\">GROUPS</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/database\" routerLinkActive=\"active\">DEV-DATABASE</a>\r\n            </li>\r\n        </ul>\r\n\r\n    </nav>\r\n    <div class=\"container-fluid-header bg-1 text-left\">\r\n            <h2 class=\"margin\">PROFILE</h2>\r\n    </div>\r\n    <div class=\"container-fluid bg-2\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-4 text-center\">\r\n                <img src=\"assets/img/iconblue.png\" class=\"img-responsive img-circle margin\" style=\"border: 3px solid #154360; display:inline\" alt=\"Icon\" width=\"200\" height=\"200\">\r\n                <h3>{{ fullName }}</h3>\r\n            </div>\r\n            <div class=\"col-sm-4 text-center\">\r\n                <img src=\"assets/img/uniconblue.png\" class=\"img-responsive img-circle margin\" style=\"border: 3px solid #154360; display: inline;\" alt=\"UN\" width=\"200\" height=\"200\">\r\n                <h3>{{ friends }} FRIENDS</h3>\r\n            </div>\r\n            <div class=\"col-sm-4 text-center\">\r\n                <img src=\"assets/img/asbiconblue.png\" class=\"img=img-responsive img-circle margin\" style=\"border: 3px solid #154360; display: inline;\" alt=\"AS\" width=\"200\" height=\"200\">\r\n                <h3>{{ groups }} GROUPS</h3>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"container-fluid-header bg-1 text-left\">\r\n    </div>\r\n    <div class=\"container-fluid bg-2\">\r\n        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure, repellat, pariatur illo, provident earum aspernatur eos dignissimos commodi harum rerum quis dolor ea! Vitae debitis non veniam nam pariatur! Accusamus?</p>\r\n    </div>\r\n\r\n\r\n    <!-- Optional JavaScript -->\r\n    <!-- jQuery first, then Popper.js, then Bootstrap JS -->\r\n    <script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js\" integrity=\"sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1\" crossorigin=\"anonymous\"></script>\r\n    <script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\" integrity=\"sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM\" crossorigin=\"anonymous\"></script>\r\n  </body>\r\n</html>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<input #searchInput placeholder=\"Enter your search term\" (keyup.enter)=\"searchYelp(searchInput.value)\">\r\n<button (click)=\"searchYelp(searchInput.value)\">Search</button>\r\n\r\n<div class=\"multi_lines_text\">{{ data }}</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'splitcheck.github.io';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: getAuthServiceConfigs, AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function () { return getAuthServiceConfigs; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var _database_database_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./database/database.component */ "./src/app/database/database.component.ts");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
            /* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/friends/friends.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
            // Configs 
            function getAuthServiceConfigs() {
                var ClientID = "991940894202-2fiu3ivcpj8p0t1d03rjcu10qvcslira.apps.googleusercontent.com";
                var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"]([
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["GoogleLoginProvider"](ClientID),
                    }
                ]);
                return config;
            }
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
                        _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                        _database_database_component__WEBPACK_IMPORTED_MODULE_10__["DatabaseComponent"],
                        _groups_groups_component__WEBPACK_IMPORTED_MODULE_12__["GroupsComponent"],
                        _friends_friends_component__WEBPACK_IMPORTED_MODULE_13__["FriendsComponent"],
                        _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__["routes"]),
                        angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"],
                    ],
                    providers: [
                        ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
                        {
                            provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"],
                            useFactory: getAuthServiceConfigs,
                        }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routes.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.routes.ts ***!
          \*******************************/
        /*! exports provided: routes */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function () { return routes; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
            /* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
            /* harmony import */ var _database_database_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./database/database.component */ "./src/app/database/database.component.ts");
            /* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
            /* harmony import */ var _friends_friends_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./friends/friends.component */ "./src/app/friends/friends.component.ts");
            /* harmony import */ var _groups_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups/groups.component */ "./src/app/groups/groups.component.ts");
            var routes = [
                { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
                { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
                { path: 'friends', component: _friends_friends_component__WEBPACK_IMPORTED_MODULE_5__["FriendsComponent"] },
                { path: 'groups', component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_6__["GroupsComponent"] },
                { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"] },
                { path: 'database', component: _database_database_component__WEBPACK_IMPORTED_MODULE_3__["DatabaseComponent"] }
            ];
            /***/ 
        }),
        /***/ "./src/app/database/database.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/database/database.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".multi_lines_text {\r\n    white-space: pre-line;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGF0YWJhc2UvZGF0YWJhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2RhdGFiYXNlL2RhdGFiYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXVsdGlfbGluZXNfdGV4dCB7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/database/database.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/database/database.component.ts ***!
          \************************************************/
        /*! exports provided: DatabaseComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseComponent", function () { return DatabaseComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/group.service */ "./src/app/services/group.service.ts");
            var DatabaseComponent = /** @class */ (function () {
                function DatabaseComponent(userService, groupService) {
                    this.userService = userService;
                    this.groupService = groupService;
                }
                DatabaseComponent.prototype.ngOnInit = function () {
                };
                /*
                 * Some basic examples on how to use the UserService
                 */
                DatabaseComponent.prototype.getUsers = function () {
                    var _this = this;
                    //This returns an Observable<User[]> Object that contains all users in database
                    //See models/user.model.ts for attributes
                    this.userService.getAllUsers().subscribe(function (users) {
                        console.log("List of all users:");
                        console.log(users);
                        console.log("Individual users:");
                        var i;
                        _this.data = "";
                        for (i = 0; i < users.length; i++) {
                            console.log(users[i]);
                            _this.data += "\n\n" + users[i];
                        }
                    });
                };
                DatabaseComponent.prototype.getUserByTheID = function (id) {
                    var _this = this;
                    console.log("Querying with ID..");
                    this.userService.getUserByID(id).subscribe(function (users) {
                        if (users.length == 0) {
                            _this.data = "No user found";
                            return;
                        }
                        if (users.length > 1) {
                            _this.data = "Database Error: Too many users";
                            return;
                        }
                        _this.data = users[0];
                    });
                };
                DatabaseComponent.prototype.getGroups = function () {
                    var _this = this;
                    //This returns an Observable<User[]> Object that contains all users in database
                    //See models/user.model.ts for attributes
                    this.groupService.getAllGroups().subscribe(function (groups) {
                        console.log("List of all groups:");
                        console.log(groups);
                        console.log("Individual groups:");
                        var i;
                        _this.data = "";
                        for (i = 0; i < groups.length; i++) {
                            console.log(groups[i]);
                            _this.data += "\n\n" + groups[i];
                        }
                    });
                };
                DatabaseComponent.prototype.getGroupByTheID = function (id) {
                    var _this = this;
                    console.log("Querying with ID..");
                    this.groupService.getGroupByID(id).subscribe(function (groups) {
                        if (groups.length == 0) {
                            _this.data = "No group found";
                            return;
                        }
                        if (groups.length > 1) {
                            _this.data = "Database Error: Too many groups";
                            return;
                        }
                        _this.data = groups[0];
                    });
                };
                return DatabaseComponent;
            }());
            DatabaseComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: _services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] }
            ]; };
            DatabaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-database',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./database.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/database/database.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./database.component.css */ "./src/app/database/database.component.css")).default]
                })
            ], DatabaseComponent);
            /***/ 
        }),
        /***/ "./src/app/friends/friends.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/friends/friends.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyaWVuZHMvZnJpZW5kcy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/friends/friends.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/friends/friends.component.ts ***!
          \**********************************************/
        /*! exports provided: FriendsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function () { return FriendsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var FriendsComponent = /** @class */ (function () {
                function FriendsComponent() {
                }
                FriendsComponent.prototype.ngOnInit = function () {
                };
                return FriendsComponent;
            }());
            FriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-friends',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./friends.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./friends.component.css */ "./src/app/friends/friends.component.css")).default]
                })
            ], FriendsComponent);
            /***/ 
        }),
        /***/ "./src/app/groups/groups.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/groups/groups.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/groups/groups.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/groups/groups.component.ts ***!
          \********************************************/
        /*! exports provided: GroupsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function () { return GroupsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _services_group_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/group.service */ "./src/app/services/group.service.ts");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var GroupsComponent = /** @class */ (function () {
                function GroupsComponent(cookieService, groupService, userService, redirect) {
                    this.cookieService = cookieService;
                    this.groupService = groupService;
                    this.userService = userService;
                    this.redirect = redirect;
                    this.data = "";
                    this.groups = [];
                }
                GroupsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //TODO VALIDATE USER
                    var userID = this.cookieService.get("user-id");
                    this.userService.getUserByID(userID).subscribe(function (users) {
                        if (users.length != 1) {
                            _this.redirect.navigate(['/']);
                        }
                        _this.user = users[0];
                        _this.updateGroupList();
                    });
                };
                GroupsComponent.prototype.updateGroupList = function () {
                    var _this = this;
                    var userID = this.cookieService.get("user-id");
                    this.userService.getUserByID(userID).subscribe(function (users) {
                        if (users.length != 1) {
                            _this.redirect.navigate(['/']);
                            return;
                        }
                        _this.user = users[0];
                        _this.data = "";
                        _this.groups = [];
                        for (var i = 0; i < _this.user.groups.length; i++) {
                            _this.groupService.getGroupByID(_this.user.groups[i]).subscribe(function (group) {
                                if (group.length == 1) {
                                    console.log("pushed: " + group[0]);
                                    _this.groups.push(group[0]);
                                    _this.data += group[0] + "\n";
                                }
                            });
                        }
                    });
                };
                GroupsComponent.prototype.createGroup = function (groupName) {
                    var _this = this;
                    this.groupService.createGroup(groupName, this.user.id).subscribe(function (data) {
                        _this.updateGroupList();
                    });
                };
                GroupsComponent.prototype.leaveGroup = function (groupID) {
                    var _this = this;
                    this.userService.leaveGroup(this.user.id, groupID).subscribe(function (e) {
                        _this.updateGroupList();
                    });
                };
                return GroupsComponent;
            }());
            GroupsComponent.ctorParameters = function () { return [
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] },
                { type: _services_group_service__WEBPACK_IMPORTED_MODULE_3__["GroupService"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-groups',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/groups/groups.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups.component.css */ "./src/app/groups/groups.component.css")).default]
                })
            ], GroupsComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.component.css": 
        /*!*******************************************!*\
          !*** ./src/app/login/login.component.css ***!
          \*******************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("body { padding: 2em; }\r\n\r\n/* Shared */\r\n\r\n.loginBtn {\r\n    box-sizing: border-box;\r\n    position: relative;\r\n    /* width: 13em;  - apply for fixed size */\r\n    margin: 0.2em;\r\n    padding: 0 15px 0 46px;\r\n    border: none;\r\n    text-align: left;\r\n    line-height: 34px;\r\n    white-space: nowrap;\r\n    border-radius: 0.2em;\r\n    font-size: 16px;\r\n    color: #FFF;\r\n  }\r\n\r\n.loginBtn:before {\r\n    content: \"\";\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 34px;\r\n    height: 100%;\r\n  }\r\n\r\n.loginBtn:focus {\r\n    outline: none;\r\n  }\r\n\r\n.loginBtn:active {\r\n    box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n  }\r\n\r\n/* Google */\r\n\r\n.loginBtn--google {\r\n    /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n    background: #DD4B39;\r\n  }\r\n\r\n.loginBtn--google:before {\r\n    border-right: #BB3F30 1px solid;\r\n    background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n  }\r\n\r\n.loginBtn--google:hover,\r\n  .loginBtn--google:focus {\r\n    background: #E74B37;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLFlBQVksRUFBRTs7QUFFckIsV0FBVzs7QUFDWDtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztFQUNiOztBQUNBO0lBQ0UsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0UsYUFBYTtFQUNmOztBQUNBO0lBQ0UsNENBQTRDO0VBQzlDOztBQUVGLFdBQVc7O0FBQ1g7SUFDSSxvREFBb0Q7SUFDcEQsbUJBQW1CO0VBQ3JCOztBQUNBO0lBQ0UsK0JBQStCO0lBQy9CLHVHQUF1RztFQUN6Rzs7QUFDQTs7SUFFRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7IHBhZGRpbmc6IDJlbTsgfVxyXG5cclxuLyogU2hhcmVkICovXHJcbi5sb2dpbkJ0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLyogd2lkdGg6IDEzZW07ICAtIGFwcGx5IGZvciBmaXhlZCBzaXplICovXHJcbiAgICBtYXJnaW46IDAuMmVtO1xyXG4gICAgcGFkZGluZzogMCAxNXB4IDAgNDZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gIH1cclxuICAubG9naW5CdG46YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAzNHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuICAubG9naW5CdG46Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICB9XHJcbiAgLmxvZ2luQnRuOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzMnB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICB9XHJcblxyXG4vKiBHb29nbGUgKi9cclxuLmxvZ2luQnRuLS1nb29nbGUge1xyXG4gICAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xyXG4gICAgYmFja2dyb3VuZDogI0RENEIzOTtcclxuICB9XHJcbiAgLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcclxuICAgIGJvcmRlci1yaWdodDogI0JCM0YzMCAxcHggc29saWQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzE0MDgyL2ljb25fZ29vZ2xlLnBuZycpIDZweCA2cHggbm8tcmVwZWF0O1xyXG4gIH1cclxuICAubG9naW5CdG4tLWdvb2dsZTpob3ZlcixcclxuICAubG9naW5CdG4tLWdvb2dsZTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(router, redirect, socialAuthService, http, userService, cookieService) {
                    this.router = router;
                    this.redirect = redirect;
                    this.socialAuthService = socialAuthService;
                    this.http = http;
                    this.userService = userService;
                    this.cookieService = cookieService;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    /*
                     * Check if a valid UserID and token combination exist in cookies
                     * --   TODO Improve security around this and UserService...
                     *      maybe omit token from responses from the backend,
                     *      and make a function to verify tokens
                     */
                    var id = this.cookieService.get('user-id');
                    this.userService.getUserByID(id).subscribe(function (users) {
                        if (users.length != 1) {
                            console.log("No valid session found in cookies.");
                            return;
                        }
                        var user;
                        if ((user = users[0]).token == _this.cookieService.get('token')) {
                            console.log("Valid, non-expired session found in cookies. Skipping log-in.");
                            _this.data = "Welcome back " + user.name + ", Redirecting...";
                            _this.login();
                        }
                        else {
                            console.log("User found but token is wrong/expired");
                        }
                    });
                };
                LoginComponent.prototype.signinWithGoogle = function () {
                    var _this = this;
                    var socialPlatformProvider = angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID;
                    this.socialAuthService.signIn(socialPlatformProvider)
                        .then(function (userData) {
                        //on success
                        //this will return user data from google. What you need is a user token which you will send it to the server
                        _this.sendToRestApiMethod(userData.idToken, userData);
                        console.log(userData);
                    });
                };
                LoginComponent.prototype.login = function () {
                    setTimeout(function () {
                        this.redirect.navigate(['/profile']);
                    }.bind(this), 2000);
                };
                LoginComponent.prototype.sendToRestApiMethod = function (idToken, userData) {
                    console.log('Verifying token...');
                    // handle promise when resolved
                    function f(result) {
                        var _this = this;
                        console.log('auth response: ', result.authentic);
                        if (result.authentic) {
                            //check to see if the user currently exists in the database, if not, add it to database.
                            this.userService.getUserByID(userData.id).subscribe(function (users) {
                                if (users.length == 0) {
                                    console.log("New User Detected, creating account.");
                                    _this.userService.makeNewUser(userData);
                                }
                                //Update cookies with new token
                                _this.userService.updateToken(userData.id, result.token);
                                _this.cookieService.set('user-id', userData.id);
                                _this.cookieService.set('token', result.token);
                                console.log(result.token);
                                console.log("Saved user in cookies");
                            });
                            console.log('OAuth success.\nRedirecting...');
                            document.getElementById("multi_lines_text").innerHTML = '<p">Redirecting...<p>';
                            // (new LoginComponent).login();
                            this.login();
                        }
                        else {
                            console.log('Invalid username or password.');
                            document.getElementById("multi_lines_text").innerHTML = '<p style="color: red">Authorization failed<p>';
                        }
                    }
                    ;
                    // check that server trusts us
                    this.http.get("https://54.164.165.203/oauth.php", {
                        params: {
                            "idToken": idToken
                        }
                    }).subscribe(f.bind(this), f.bind(this));
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    providers: [angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"], angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["SocialLoginModule"]],
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/models/group.model.ts": 
        /*!***************************************!*\
          !*** ./src/app/models/group.model.ts ***!
          \***************************************/
        /*! exports provided: Group */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function () { return Group; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Group = /** @class */ (function () {
                function Group() {
                }
                Group.prototype.deserialize = function (input) {
                    Object.assign(this, input);
                    return this;
                };
                Group.prototype.toString = function () {
                    return "{" +
                        "id: " + this.id + "," +
                        "name: " + this.name + "," +
                        "ownerID: " + this.ownerID + "," +
                        "userIDs: [" + this.userIDs + "]}";
                };
                return Group;
            }());
            /***/ 
        }),
        /***/ "./src/app/models/user.model.ts": 
        /*!**************************************!*\
          !*** ./src/app/models/user.model.ts ***!
          \**************************************/
        /*! exports provided: User */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function () { return User; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var User = /** @class */ (function () {
                function User() {
                }
                User.prototype.deserialize = function (input) {
                    Object.assign(this, input);
                    return this;
                };
                User.prototype.toString = function () {
                    return "{" +
                        "id: " + this.id + "," +
                        "name: " + this.name + "," +
                        "token: " + this.token + "," +
                        "email: " + this.email + "," +
                        "friends: [" + this.friends.toString() + "] ," +
                        "groups: [" + this.groups.toString() + "]}";
                };
                return User;
            }());
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/profile/profile.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/profile/profile.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/profile/profile.component.ts ***!
          \**********************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
            /* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(userService, cookieService, redirect) {
                    this.userService = userService;
                    this.cookieService = cookieService;
                    this.redirect = redirect;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var cookie = this.cookieService.get("user-id");
                    this.userService.getUserByID(cookie).subscribe(function (users) {
                        if (users.length != 1) {
                            console.log("UserID not found");
                            _this.redirect.navigate(['/']);
                        }
                        else {
                            _this.user = users[0];
                            _this.fullName = _this.user.name;
                            _this.friends = _this.user.friends.length;
                            _this.groups = _this.user.groups.length;
                        }
                    });
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
                { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/search/search.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/search/search.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".multi_lines_text { \r\n    white-space: pre-line; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11bHRpX2xpbmVzX3RleHQgeyBcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgXHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/search/search.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/search/search.component.ts ***!
          \********************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_yelp_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/yelp-search.service */ "./src/app/services/yelp-search.service.ts");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(yelpSearch) {
                    this.yelpSearch = yelpSearch;
                }
                SearchComponent.prototype.ngOnInit = function () {
                };
                SearchComponent.prototype.searchYelp = function (query) {
                    var _this = this;
                    // resets the data with each search
                    this.data = '';
                    this.yelpSearch.getData(query).subscribe(function (data) {
                        for (var i = 0; i < 20; i++) {
                            // TODO: build interface for returned data
                            var business = { alias: null, location: { display_address: null } };
                            // if (!(data.businesses === "undefined")) {
                            business = data.businesses[i];
                            _this.data += '\n' + business.alias + '------------' + business.location.display_address;
                            // }
                        }
                    });
                };
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: _services_yelp_search_service__WEBPACK_IMPORTED_MODULE_2__["YelpSearchService"] }
            ]; };
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/services/group.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/group.service.ts ***!
          \*******************************************/
        /*! exports provided: GroupService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function () { return GroupService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _models_group_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/group.model */ "./src/app/models/group.model.ts");
            /* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var GroupService = /** @class */ (function () {
                function GroupService(http) {
                    this.http = http;
                    this.databaseUrl = "https://54.164.165.203/";
                }
                //returns an observable list of all users in the database
                GroupService.prototype.getAllGroups = function () {
                    return this.http.get(this.databaseUrl + "showGroups.php").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data.map(function (data) { return new _models_group_model__WEBPACK_IMPORTED_MODULE_2__["Group"]().deserialize(data); }); }));
                };
                /*
                 * Returns an observable list of all users in the database with a given ID.
                 * In almost every case, it will return an empty array if the user isnt found,
                 * or it will return an array of size 1 containing the user.
                 */
                GroupService.prototype.getGroupByID = function (id) {
                    return this.http.get(this.databaseUrl + "getGroupByID.php", {
                        params: {
                            "id": id
                        }
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data.map(function (data) { return new _models_group_model__WEBPACK_IMPORTED_MODULE_2__["Group"]().deserialize(data); }); }));
                };
                GroupService.prototype.createGroup = function (name, ownerID) {
                    console.log("yeah...");
                    return this.http.get(this.databaseUrl + "createGroup.php", {
                        params: {
                            "name": name,
                            "ownerID": ownerID
                        }
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) { return data.map(function (data) { return new _models_group_model__WEBPACK_IMPORTED_MODULE_2__["Group"]().deserialize(data); }); }));
                };
                return GroupService;
            }());
            GroupService.ctorParameters = function () { return [
                { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            GroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
                    providedIn: 'root'
                })
            ], GroupService);
            /***/ 
        }),
        /***/ "./src/app/services/user.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/user.service.ts ***!
          \******************************************/
        /*! exports provided: UserService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function () { return UserService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var UserService = /** @class */ (function () {
                function UserService(http) {
                    this.http = http;
                    /*
                     * Quick List of Methods:
                     *
                     * getAllUsers()
                     * getUserByID(id:string)
                     * makeNewUser(user:SocialUser)
                     * updateToken(userID:string, token:string)
                     * addFriend(userID:string, friendID:string)
                     * removeFriend(userID:string, friendID:string)
                     * joinGroup(userID:string, groupID:string)
                     * leaveGroup(userID:string, groupID:string)
                     *
                     *
                     *
                     */
                    this.databaseUrl = "https://54.164.165.203/";
                }
                //returns an observable list of all users in the database
                UserService.prototype.getAllUsers = function () {
                    return this.http.get(this.databaseUrl + "showUsers.php").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.map(function (data) { return new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]().deserialize(data); }); }));
                };
                /*
                 * Returns an observable list of all users in the database with a given ID.
                 * In almost every case, it will return an empty array if the user isnt found,
                 * or it will return an array of size 1 containing the user.
                 */
                UserService.prototype.getUserByID = function (id) {
                    return this.http.get(this.databaseUrl + "getUserByID.php", {
                        params: {
                            "id": id
                        }
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.map(function (data) { return new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]().deserialize(data); }); }));
                };
                /*
                 * Creates a new user in the database given Google's SocialUser object
                 */
                UserService.prototype.makeNewUser = function (user) {
                    //TODO: Verify SocialUser data isnt garbage
                    this.http.get(this.databaseUrl + "createUser.php", {
                        params: {
                            "id": user.id,
                            "name": user.name,
                            "token": user.idToken,
                            "email": user.email
                        }
                    }).subscribe(function (data) { console.log(data); });
                };
                /*
                 * Update's a user's token given a user ID and token
                 */
                UserService.prototype.updateToken = function (userID, token) {
                    //TODO: Verify userID and friendID before sending to backend
                    function f(result) {
                        console.log("UpdateToken Function on UID " + userID + " w/ + " + token + " completed:");
                        console.log(result);
                    }
                    this.http.get(this.databaseUrl + "updateToken.php", {
                        params: {
                            "id": userID,
                            "token": token
                        }
                    }).subscribe(f.bind(this), f.bind(this));
                };
                /*
                 * Adds a friend to a user, given the user's ID and the friend-to-be-added's ID
                 * > If the userID is invalid, nothing happens.
                 * > If fID is invalid, it will still be added.
                 */
                UserService.prototype.addFriend = function (userID, friendID) {
                    //TODO: Verify userID and friendID before sending to backend
                    return this.http.get(this.databaseUrl + "addFriend.php", {
                        params: {
                            "uid": userID,
                            "fid": friendID
                        }
                    });
                };
                /*
                 * Removes a friend from a user, given the user's ID and the friend-to-be-removed's ID
                 * > If the userID or friendID isnt in the user's friendslist, nothing happens.
                 */
                UserService.prototype.removeFriend = function (userID, friendID) {
                    //TODO: Verify userID and friendID before sending to backend
                    return this.http.get(this.databaseUrl + "removeFriend.php", {
                        params: {
                            "uid": userID,
                            "fid": friendID
                        }
                    });
                };
                /*
                 * Adds group to user's grouplist, given user's ID and group-to-join's ID
                 * > If the userID is invalid, nothing happens.
                 * > If the groupID is invalid, it will still be joined.
                 */
                UserService.prototype.joinGroup = function (userID, groupID) {
                    //TODO: Verify userID and friendID before sending to backend
                    return this.http.get(this.databaseUrl + "joinGroup.php", {
                        params: {
                            "uid": userID,
                            "gid": groupID
                        }
                    });
                };
                /*
                * Removes a group from a user, given the user's ID and the group-to-leave's ID
                * > If the userID is invalid, or groupID isnt in the user's grouplist, nothing happens.
                */
                UserService.prototype.leaveGroup = function (userID, groupID) {
                    //TODO: Verify userID and friendID before sending to backend
                    console.log("Leaving..");
                    return this.http.get(this.databaseUrl + "leaveGroup.php", {
                        params: {
                            "uid": userID,
                            "gid": groupID
                        }
                    });
                };
                return UserService;
            }());
            UserService.ctorParameters = function () { return [
                { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UserService);
            /***/ 
        }),
        /***/ "./src/app/services/yelp-search.service.ts": 
        /*!*************************************************!*\
          !*** ./src/app/services/yelp-search.service.ts ***!
          \*************************************************/
        /*! exports provided: YelpSearchService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YelpSearchService", function () { return YelpSearchService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../node_modules/@angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var YelpSearchService = /** @class */ (function () {
                function YelpSearchService(http) {
                    this.http = http;
                }
                //   Yelp API Stuff:
                // Client ID
                // AIDbWpXQyrDAdNzE3cRxhg
                // API Key
                // CWUaTFyAkkwf9rR3ktjTru2TFcNzY4DDpza6eVvCSDHZ89YN1dRSckT0MT6vKU14WuA4nKqDAkc6E4tKFB7qUfqYOHo4W4BHSfv4n9c6u58GMn3TZbAGcVauc-upXXYx
                // gets the data from yelp api given a search term
                YelpSearchService.prototype.getData = function (term) {
                    var token = 'CWUaTFyAkkwf9rR3ktjTru2TFcNzY4DDpza6eVvCSDHZ89YN1dRSckT0MT6vKU14WuA4nKqDAkc6E4tKFB7qUfqYOHo4W4BHSfv4n9c6u58GMn3TZbAGcVauc-upXXYx';
                    var reqHeader = new _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    });
                    return this.http.get("https://54.164.165.203/yelp.php?businesses/search?", {
                        headers: reqHeader,
                        params: {
                            "location": "boston",
                            "term": term
                        }
                    });
                };
                return YelpSearchService;
            }());
            YelpSearchService.ctorParameters = function () { return [
                { type: _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            YelpSearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_node_modules_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], YelpSearchService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Andre\Documents\SplitCheckProject\CS411_Group\angular-dev\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map