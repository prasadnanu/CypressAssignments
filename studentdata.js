/* Program 8- Write a program that creates the below Object.
	Object name - Student
	Property 
		Name
		College Name
		Location
		PinCode
		Teachers details should be teacherName, teacherPhone, teacherSubjects

	Print Student name, teacherName on console.
*/

let student = {Name:"Prasad",
               College_Name:"Loyola",
               Location:"Hyderabad",
               Pincode:500089,
               Teacher:{
                TeacherName:"Mukesh",
                TeacherPhone:1478523690,
                TeacherSubjects:{
                    subj1:"C",
                    sub2:"C++",
                    sub3:"Java Script",
                    sub4:"Cypress"
            }
                }    
           }
// Below console statement prints the student name and teacher name in the console
console.log("Student Name is: ",student.Name,"\nTeacher Name is: ",student.Teacher.TeacherName);
 
// Below console statement prints the student name and teacher name along with subject in the console
console.log("Student Name is: ",student.Name,"\nTeacher Name is: ",student.Teacher.TeacherName,"\nSubject is: ",student.Teacher.TeacherSubjects.sub3);
