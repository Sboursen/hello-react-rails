# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Greeting.create!([
                   {
                     language: 'ALGOL',
                     message: 'BEGIN DISPLAY("HELLO WORLD!") END.'
                   },
                   {
                     language: 'APPLESCRIPT',
                     message: 'say "Hello, world!"'
                   },
                   {
                     language: 'C',
                     message: 'printf("hello, world\n");'
                   },
                   {
                     language: 'CAML (OCAML)',
                     message: 'print_endline "Hello, world!";;'
                   },
                   {
                     language: 'CLOJURE (CLOJURESCRIPT)',
                     message: '(println "Hello world!")'
                   },
                   {
                     language: 'DBASE (FOXPRO)',
                     message: '? "Hello World"'
                   },
                   {
                     language: 'ERLANG',
                     message: 'hello_world() -> io:fwrite("hello, world\n").'
                   },
                   {
                     language: 'ELIXIR',
                     message: 'IO.puts "Hello World!"'
                   },
                   {
                     language: 'HASKELL',
                     message: 'main = putStrLn "Hello, World!"'
                   },
                   {
                     language: 'JAVASCRIPT (ECMASCRIPT)',
                     message: 'console.log("Hello World!");'
                   },
                   {
                     language: 'PHP',
                     message: '<?php echo "Hello, World";'
                   },
                   {
                     language: 'RUBY',
                     message: "puts 'Hello World!'"
                   },
                   {
                     language: 'RUST',
                     message: 'println!("Hello, world!");'
                   },
                   {
                     language: 'PYTHON',
                     message: 'print("Hello World")'
                   },
                   {
                     language: 'PYTHON',
                     message: 'print("Hello World")'
                   }
                 ])
