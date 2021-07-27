var i = 1 ;
while (i <= 10) {
    console.log(i++)
}

// do...while
i = 1 ;
do {
    console.log(i);
    i++ ;
}while(i <= 10) ;

// break
console.log("Break")
for (i = 1; i <= 10; i++){
    if (i ==3) break ;
    console.log(i);
}
// continue
console.log("Continue");
for (i=1;i<= 10; i++){
    if(i == 3) continue;
    console.log(i);
}