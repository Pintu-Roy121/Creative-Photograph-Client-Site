import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')



    return (
        <div className='w-11/12 mx-auto px-10 my-10'>
            <div className='my-10 mx-8 bg-gray-100 p-10 rounded-xl shadow-stone-600 shadow-lg'>
                <h1 className='text-xl md:text-3xl font-bold'>Q1: Difference between SQL and NoSQL</h1>
                <p className='mt-3 text-justify'>
                    <span className='text-lg md:text-xl font-semibold md:font-bold'>SQL:</span>
                    <br />
                    Relational Database Management system (RDMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them.) <span className='font-semibold'>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server etc</span>
                    <br />
                    <span className='text-lg md:text-xl font-semibold md:font-bold'>NoSQL:</span>
                    <br />
                    Non-relational or distributed database system.They have dynamic schema. These databases are best suited for hierarchical data storage. These databases are not so good for complex queries. NoSQL is a class of DBMs that are non-relational and generally do not use SQL. <span className='font-semibold'>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra etc</span>
                </p>
            </div>
            <div className='my-10 mx-8 bg-gray-100 p-10 rounded-xl shadow-stone-600 shadow-lg'>
                <h1 className='text-xl md:text-3xl font-bold'>Q2: What is JWT, and how does it work?</h1>
                <p className='mt-3 text-justify'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request.</p>
            </div>
            <div className='my-10 mx-8 bg-gray-100 p-10 rounded-xl shadow-stone-600 shadow-lg'>
                <h1 className='text-xl md:text-3xl font-bold'>Q3: What is the difference between javascript and NodeJS?</h1>
                <p className='mt-3 text-justify'>1. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.  <br /><br />

                    2. NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br />
                    <br />
                    3. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.

                </p>
            </div>
            <div className='my-10 mx-8 bg-gray-100 p-10 rounded-xl shadow-stone-600 shadow-lg'>
                <h1 className='text-xl md:text-3xl font-bold'>Q4: How does NodeJS handle multiple requests at the same time?</h1>
                <p className='mt-3 text-justify'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br />

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
        </div>
    );
};

export default Blog;