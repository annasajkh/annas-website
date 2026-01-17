# Introduction
---

C# has been a critized to be Microsoft copied of Java because its syntax is **very** similar to java
#### Java Hello World
```java
class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

#### C# Hello World
```cs
class Program
{
    static void Main()
    {
        Console.WriteLine("Hello, World!");
    }
}
```

#### C# Hello World With Top Level Statement
```cs
Console.WriteLine("Hello, World!");
```

But now C# has go up and beyond of just being a copy of Java, it have so many features that makes writing code in it so enjoyable.
```cs
Dictionary<int, List<Person>> people = new()
{
    {
        832856832,
        [new Person(name: "Bob", age: 16), new Person(name: "John", age: 53)]
    },

    {
        734956,
        [new Person("Lisa", 52), new Person("Alex", 12)]
    },
};

List<Person> kids = (from chunkPerson in people.Values from person in chunkPerson where person.Age <= 18 select person).ToList();

foreach (var kid in kids)
{
    kid.SayHello();
}


class Person
{
    public string Name { get; private set; }
    public int Age { get; private set; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }

    public void SayHello()
    {
        Console.WriteLine($"Hello my name is {Name} and i'm {Age} years old");
    }
}
```
Java just recently added string templates in Java 21
```java
String line = STR."My name is \{name}. My age is \{age}." ;
```
This is the closest thing to string interpolation in Java, why they are so slow at adding modern feature to the language i really don't understand.

Things like this is what makes me move from Java to C# as my main application development language, but then the more i learn about this language, the more i realized how beautiful this language trully is.

# What's Makes C# So Beautiful
---

So what Microsoft does to make it so beautiful? the thing is if you think about the creator of C# you think microsoft.\
But the language is design by Anders Hejlsberg, He is an amazing language designer who also designed **Turbo Pascal**, **Delphi**, and **TypeScript**. You might heard or use one his language at least once.\
So what's makes C# so beautiful?

#### C# Standard Library Naming
```cs
using System.Diagnostics;
using System.IO.Compression;
using System.Net.NetworkInformation;
using System.Text.Json;
using System.Text.RegularExpressions;

if (!File.Exists("config.json"))
{
    var bob = new Person(name: "Bob", age: 23);

    File.WriteAllText(path: "config.json", contents: JsonSerializer.Serialize(bob));
}
else
{
    var bob = JsonSerializer.Deserialize<Person>(File.ReadAllText(path: "config.json"));
    File.Delete("config.json");
}

if (Directory.Exists("src"))
{
    Directory.Move(sourceDirName: "src", destDirName: "temp/src");
    Directory.CreateSymbolicLink(path: "temp/src", pathToTarget: "src");
    Directory.Delete("temp/src");
}

if (Regex.IsMatch("something", "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$\r\n") && OperatingSystem.IsLinux())
{
    Console.WriteLine(DriveInfo.GetDrives());
}

Environment.SetEnvironmentVariable(variable: "yoo", value: "123");
Console.WriteLine(Environment.GetEnvironmentVariable("yoo"));
Environment.SetEnvironmentVariable("yoo", null);

Process.Start("notepad.exe");

var networkInterfaces = NetworkInterface.GetAllNetworkInterfaces();

ZipFile.CreateFromDirectory("foo", "foo.zip");

Console.ForegroundColor = ConsoleColor.Red;
Console.WriteLine("Fuck");
Console.ForegroundColor = ConsoleColor.White;

record Person(string name, int age);
```
The C# standard library naming is just so readable and simple for example **File.WriteAllText()**, **File.Delete()**, **Directory.Move()**, and **Directory.Delete()**\
Another thing is the naming is in full word! influenced by Java and it abbreviate sometimes, like with the type name bool instead of boolean.
```cs
Console.ForegroundColor = ConsoleColor.Red;
Console.WriteLine("Fuck");
Console.ForegroundColor = ConsoleColor.White;
```
Instead of
```cs
Console.FColor = CColor.Red;
Console.WriteL("Fuck");
Console.FColor = CColor.White;
```
I really hate languages that does that, it's really hard to read especially in large code bases

#### C# General Naming

Because in c# there is no top level functions there would be less ambiguity, in python there is function like input() and print(), for me it's ambiguous because for example print().\
What is it printing to? is it the console? is it a file? or is it a logger? it's ambiguous, in C# there is Console.WriteLine(); and it's clear that it is writing to the console.

#### C# Embraces Syntatic Sugar And Modern Features
C# embraces many modern features like string interpolation, package manager, record, null safety, pattern matching, async/await, etc\
It also embraces many syntatical sugar but not too much
```cs
string name = "Annas";
string greeting = $"Hello, {name}!";

Console.WriteLine(greeting); 

int? maybeNumber = 1;

if (maybeNumber is int number)
{
    Console.WriteLine(number);
}

public decimal CalculateDiscount(Order order)
{
    order switch
    {
        { Items: > 10, Cost: > 1000.00m } => 0.10m,
        { Items: > 5, Cost: > 500.00m } => 0.05m,
        { Cost: > 250.00m } => 0.02m,
        null => throw new ArgumentNullException(nameof(order), "Can't calculate discount on null order"),
        var someObject => 0m,
    };
}

public record Person(string FirstName, string LastName);

var person = new Person("John", "Doe");
Console.WriteLine(person);

public async IAsyncEnumerable<int> GetNumbersAsync()
{
    for (int i = 0; i < 5; i++)
    {
        await Task.Delay(1000);
        yield return i;
    }
}

await foreach (var number in GetNumbersAsync())
{
    Console.WriteLine(number);
}

List<int> numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Parallel.ForEach(numbers, number =>
{
    int result = number * number;
    Console.WriteLine($"Square of {number} is {result}.");
});
```
So yeah that's the reason why i think C# is the most beautiful language, thank you for reading my blog hope you have a fantastic day.