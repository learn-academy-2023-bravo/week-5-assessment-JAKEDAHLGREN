# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:

When you call super in a Ruby class, you are making that class a parent, and this allows you to pass inherited information to the child classes. You send the inherited information by using attr_accessor, and the super class can only share attributes that are common for all other sub classes. For example, say we have a super class of Cars with the attr_accessor :model :year :color, if I made a subclass/child class called class Trucks the attr_accessor attributes of model, year, and color would be passed down to class Trucks. I can add custom attributes that are specifically related to trucks, like :bed_length :cab_style ect, that only affect the child class. I couldn't have a sub class of Weather under my super class Cars, because Weather doesn't share the common attributes of model, year, and color. It would have to be seperate from the parent class Cars.

Researched answer:

Inheritance is when one class takes on behaviors from another class as its own. This reinforces the concept of reausability within your code, and cuts down on redundancy. The class that is receiving those behaviors is the subclass, and the class that is passing down the these traits is known as the super class. The super class already contains parts of code, a programmer might want to use, when creating a new class. The super class holds all of the common keys/symbols for all subclasses, and within the subclass you can create additional keys that may be unique to that class. The added subclass keys will not effect the super class or any of the other subclasses. 

2. What is a gem?

Your answer:

A gem is what holds the dependecies needed to operate your Ruby code. Gems are the package manager that runs in your terminal to inport all the needed information to make your Ruby files run.

Researched answer:

Gems contain packages of ruby code that give the user access to built in methods created by other programmers. Gems make it easier to share code, and each gem has very specific functionality. You can view a list of gems from your computers terminal, call gem unpack followed by the name of the gem, and then copy all of the code, and paste it into your application.

3. What is a relational database? Are there other kinds of databases?

Your answer:

A relational database is formated similarly to an excell spreadsheet. It organizes data in a table made up of rows and columns. The class desribes the data that is being held, the key attributes define what kind of data each column represents, and every instance, or object, of that class creates the rows. I know there are, but I can't think of examples of the types of non relational databases

Researched answer:

A relational database is structured in a way so that it recognizes the relations between stored data. They are a intuitive/straightforward way of representing data in tables. Each item inside a relational database table has unique tag called a Prime Key which organizes and makes pulling all of the rows data much easier. There a lots of different types of databases besides relational databases. Some of the most common non-relational databases are document data store, column-oriented database, key-valuse store, document store, and graph database. It is common to use multiple of these non-relational databases together in one app.

4. What are primary keys? Why are they important?

Your answer:

Primary Keys are an extremely important piece of information in any database. The Primary Key is what assigns a unique value to each object inside the table that is storing your data. This unique value makes it much easier to reference a specific row of data, and call all of the information it contains. It is also very important when you create a sub table of data because the primary key is transfered to the sub table as the Foreign Key, and that is how you can see how your data relates to your origional table.

Researched answer:

A prime key is the column that contains values which uniquely identify each row of data in a table. Prime key values cannot be duplicated, each row must have a completely unique identifier. These prime keys are neccessary in order for a database to function properly. Once the first table is created, and sub tables under the first is linked to it through the prime key. The child table inherites the prime key as their foreign key. This defines the relationship between the two tables, and the child table still receives its own prime key.


5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer:

The HTTP verbs are actions that allow you to create, display, edit, and remove data. The HTTP verbs are post request, get request, put request, patch request, and delete request. They all relate to the CRUD actions of create, read, update and delete. When adding new content(Create), you use the verb post request. To display content(Read), you use get request. For modifying existing content(Update), you can use either put request or patch request. Finally to remove content(delet), you can use the aptly named delete request.

Researched answer:

HTTP verbs tell a server how to manage the data identified by the URL. They are a set of request methods that indicate the desired action that is performed by a specified source. The verbs are Post request which creates content, Get request which displays content, Put and Patch request edit content, and Delete request removes content. We can see how these verbs closely relate to the CRUD actions Create, Read, Update, and Delete. Create is related to Post request, Read is related to Get request, Update is related to Put/Patch request, and Delete is related to Delete request.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:

Model validation is the process to ensure that the contents of a database are accurate, consistent, and follow certain rules/constraints. This validation helps to keep data correct and consistent while also preventing inaccuracies or errors from occuring in your data analysis. Database model validation involves verifying that the data is accurate, valid, and complete, it is without duplicates or missing records, and that table/model relationships are properly defined. 

2. RESTful routes:

This is a standardized set of constraints, that can be used in lots of different languages, to setup efficient and reuasble routes to share information. Its goal is to combine the HTTP verbs (get, post, patch, delete) with the CRUD actions(create, read, update, destroy) in a conventional pattern.

3. ERB:

ERB is a templating language for Ruby. When you use the file extention .erb, instead of .rb, it allows you to embed Ruby into a text document. While it allows you to embed Ruby into a text doc, the eruby language cannot be interpreted by a Ruby interpreter. They are seperate languages.

4. Params:

Params, when talking about action controllers, are what allow you to choose which attributes are permitted for mass upload, it is a safety net so you dont accidentally upload something you weren't supppsed to. It provides two methods to control this, 'require' and 'permit'. Require marks the parameters, and permit sets the parameter as permitted which limits attributes that should be allowed for mass updating.

5. API:

API stands for Application Programming Interface. Application is any software with a specific function, programming refers to the developement of those apps, and interface is the communication or contract of service between the two apps.
