/* 
document.write("Good") ;
var hours = 1 ;
switch (hours) {
    case 0 : case 1 : case 2 : case 3 : case 4 : case 5 : case 6 : case 7 : case 8 : case 9 : 
        document.write("morning.") ; break ; 
    case 13 : case 14: case 15 : case 16 : 
        document.write("afternoon.") ; break ;
    case 17: case 18:
        document.write("evening.") ; break;
    default :
        document.write("day .")
}
*/
var day = 0 ;
switch(day){
    case 0 : document.write("Output : Sunday") ; break ;
    case 1 : document.write("Output : Monday") ; break ;
    case 2 : document.write("Output : Tuesday") ; break ;
    case 3 : document.write("Output : Wednesday") ; break ;
    case 4 : document.write("Output : Thursday") ; break ;
    case 5 : document.write("Output : Friday") ; break ;
    case 6 : document.write("Saturday") ; break ;

}