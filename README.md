Matrix Addition Program:

The files are in the src > Solis > AlexanderJon > SolisAlexanderJonMidtermReq.java


Files:
TrialApproach.java - my initial test run without the use of text files

SolisAlexanderJonMidtermReq.java - the final version of my program which uses the text files for the inputs

input.txt & input2.txt = the text files which contains the elements of the matrices

Note:
I omitted the dots on the file name format Lastname.Firstname.MidtermReq.java for my java file since my IDE, Netbeans is not accepting java files/classes that has dots in between so I just used camel case for the file name. 

Purpose:
The purpose of this program is to use the BigDecimal package of java for adding 3x3 matrices.

Packages used & its use in the progam:
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.math.BigDecimal;

The first four packages are used for the text files.
In which the BufferedReader is used to read line of texts as an input from the text files I used.

The java.io.File is used just for this use: System.getProperty("user.dir")+ File.separator +"input.txt". I used the System.getProperty("user.dir") to get the user directory of the user where the input.txt possibly can be when the zip file is unzipped, the File.separator is just used as a separator to the file path and the file itself. I used these so the program can still run even though it is on a different machine.

The FileReader on the other hand, is essential to read the file itelf to create the Instance for the BufferedReader for more efficient reading of text.

The IOException is used for the exception handling while I perform the I/O operations which ensures the program behaves properly in case of errors.

And lastly, the BigDecimal is used in the program for a more precise calculations and I also used it for creating the 2D arrays where I stored the inputs from the text files to create my 3x3 matrices.

Approach:
Initially, I made a program without the file reading of text files and used a normal 2D array as my matrices. 

From there I worked on the logic of the addition of the matrices with the use of for loop so that I can iterate the elements inside of the 2D array properly and then adds those elements properly with each other, before I use the text files for the values or elements of the matrices. 

Then, I adapted the logic of the my initial program to the final one which has a method that uses the 3 packages mentioned in the "Packages used" section of this README file in order to use the texts from the texts files for the 2D arrays. I also used a while and for loops to iterate each of the elements and put it inside the matrices.

And lastly, I stored the sums of the matrices on another 2D array which is the sumArray in which will be printed out for the result of the addition of the 3x3 matrices.

