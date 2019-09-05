var a;
var inpu,inp,inp1,inp2;
var div;
var i=0,k=0,j=100,l=0,m=0,n=0,o=0;
var oldValue;
var flag=0;
var p;
var p1;
var i,i1,i2,i3;

document.getElementById('myText').addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 13) { 
                NewTask();          
        }
    });

function NewTask(){

        a=document.getElementById("myText").value;
        document.getElementById('myText').value = '';
        localStorage.setItem(`${i}`, a);

        div = document.createElement('div');
        div.setAttribute("class","all-task-detail")
        p1=document.createElement('p');
        p1.innerHTML=localStorage.getItem(`${i}`);
        p1.setAttribute("class","task-list");
        
        inp=document.createElement('button');
        // inp.innerHTML="completed";
        inp.setAttribute("type","button");
        inp.setAttribute("class","btn btn-info btn-comp");
        inp.addEventListener("click",completed);

        i1=document.createElement('i');
        i1.setAttribute("class","fa fa-check-square-o");
        i1.setAttribute("area-hidden","true");
        
        inp1=document.createElement('button');
        // inp1.innerHTML="Edit";
        inp1.setAttribute("type","button");
        inp1.setAttribute("class","btn btn-info");
        inp1.addEventListener("click",edit);

        i2=document.createElement('i');
        i2.setAttribute("class","fa fa-pencil");
        i2.setAttribute("area-hidden","true");
        
        inp2=document.createElement('button');
        // inp2.innerHTML="delete";
        inp2.setAttribute("type","button");
        inp2.setAttribute("class","btn btn-info");
        inp2.addEventListener("click",deleted);
        i3=document.createElement('i');
        i3.setAttribute("class","fa fa-trash");
        i3.setAttribute("area-hidden","true");
        
       
        inp.appendChild(i1);
        inp1.appendChild(i2);
        inp2.appendChild(i3);


       

        div.appendChild(p1);
        div.appendChild(inp);
        div.appendChild(inp1);
        div.appendChild(inp2);
        
        document.getElementById('TaskList').appendChild(div);
        
        
        i++;
        k++;
       
        localStorage.setItem('k', k);
}


function allTask()
{       
        i=0;
        k=localStorage.getItem('k');
        document.getElementById('TaskList').innerHTML="";
        while(i<k)
        {
                
                div = document.createElement('div');
                div.setAttribute("class","all-task-detail")
                p1=document.createElement('p');
                p1.innerHTML=localStorage.getItem(`${i}`);
                p1.setAttribute("class","task-list");
                
                inp=document.createElement('button');
                // inp.innerHTML="completed";
                inp.setAttribute("type","button");
                inp.setAttribute("class","btn btn-info btn-comp");
                inp.addEventListener("click",completed);

                i1=document.createElement('i');
                i1.setAttribute("class","fa fa-check-square-o");
                i1.setAttribute("area-hidden","true");
                
                inp1=document.createElement('button');
                // inp1.innerHTML="Edit";
                inp1.setAttribute("type","button");
                inp1.setAttribute("class","btn btn-info");
                inp1.addEventListener("click",edit);

                i2=document.createElement('i');
                i2.setAttribute("class","fa fa-pencil");
                i2.setAttribute("area-hidden","true");
                
                inp2=document.createElement('button');
                
                inp2.setAttribute("type","button");
                inp2.setAttribute("class","btn btn-info");
                inp2.addEventListener("click",deleted);
                i3=document.createElement('i');
                i3.setAttribute("class","fa fa-trash");
                i3.setAttribute("area-hidden","true");
                
               
                inp.appendChild(i1);
                inp1.appendChild(i2);
                inp2.appendChild(i3);



                div.appendChild(p1);
                div.appendChild(inp);
                div.appendChild(inp1);
                div.appendChild(inp2);
        
                document.getElementById('TaskList').appendChild(div);
                i++;
                
        }
}
function completedTask(){
        m=0;
        j=100;
        l=localStorage.getItem('l');
  
        document.getElementById('TaskList').innerHTML="";
        while(m<l)
        {  
                
                div = document.createElement('div');
                div.setAttribute("class","all-task-detail")
                p1=document.createElement('p');
                p1.innerHTML=localStorage.getItem(`${j}`);
                p1.setAttribute("class","task-list");
                
                inp=document.createElement('button');
                // inp.innerHTML="completed";
                inp.setAttribute("type","button");
                inp.setAttribute("class","btn btn-info btn-comp");
                inp.addEventListener("click",completed);

                i1=document.createElement('i');
                i1.setAttribute("class","fa fa-check-square-o");
                i1.setAttribute("area-hidden","true");
                
                inp1=document.createElement('button');
                // inp1.innerHTML="Edit";
                inp1.setAttribute("type","button");
                inp1.setAttribute("class","btn btn-info");
                inp1.addEventListener("click",edit);

                i2=document.createElement('i');
                i2.setAttribute("class","fa fa-pencil");
                i2.setAttribute("area-hidden","true");
                
                inp2=document.createElement('button');
                // inp2.innerHTML="delete";
                inp2.setAttribute("type","button");
                inp2.setAttribute("class","btn btn-info");
                inp2.addEventListener("click",deleted);
                i3=document.createElement('i');
                i3.setAttribute("class","fa fa-trash");
                i3.setAttribute("area-hidden","true");
                
               
                inp.appendChild(i1);
                inp1.appendChild(i2);
                inp2.appendChild(i3);


                div.appendChild(p1);    
                div.appendChild(inp);
                div.appendChild(inp1);
                div.appendChild(inp2);
        
                document.getElementById('TaskList').appendChild(div);
                j++;
                m++;
        }
}

function remainingTask(){
        var allTaskValue;
        var completedTaskValue;
        n=0,o=0;
        i=0;
        k=localStorage.getItem('k');
        while(i<k)
        {
                j=100;
                m=0;
                l=localStorage.getItem('l');        
                allTaskValue=localStorage.getItem(`${i}`);
                flag=0;
                while(m<l)
                {
                        
                        completedTaskValue=localStorage.getItem(`${j}`);
                        
                        if(allTaskValue==completedTaskValue)
                        {
                                flag=1;
                                break;
                        }
                        m++;
                        j++;                             
                }
                if(flag==0)
                {
                        localStorage.setItem(`r${n}`,allTaskValue);
                        n++;
                        o++;
                        flag=1;
                }

                i++; 
                localStorage.setItem('o',o);
        
        }
        n=0;
        o=localStorage.getItem('o');
        document.getElementById('TaskList').innerHTML="";
        while(n<o)
        {
                
                div = document.createElement('div');
                div.setAttribute("class","all-task-detail")
                p1=document.createElement('p');
                p1.innerHTML=localStorage.getItem(`r${n}`);
                p1.setAttribute("class","task-list");
                
                inp=document.createElement('button');
                // inp.innerHTML="completed";
                inp.setAttribute("type","button");
                inp.setAttribute("class","btn btn-info btn-comp");
                inp.addEventListener("click",completed);

                i1=document.createElement('i');
                i1.setAttribute("class","fa fa-check-square-o");
                i1.setAttribute("area-hidden","true");
                
                inp1=document.createElement('button');
                // inp1.innerHTML="Edit";
                inp1.setAttribute("type","button");
                inp1.setAttribute("class","btn btn-info");
                inp1.addEventListener("click",edit);

                i2=document.createElement('i');
                i2.setAttribute("class","fa fa-pencil");
                i2.setAttribute("area-hidden","true");
                
                inp2=document.createElement('button');
                // inp2.innerHTML="delete";
                inp2.setAttribute("type","button");
                inp2.setAttribute("class","btn btn-info");
                inp2.addEventListener("click",deleted);
                i3=document.createElement('i');
                i3.setAttribute("class","fa fa-trash");
                i3.setAttribute("area-hidden","true");
                
               
                inp.appendChild(i1);
                inp1.appendChild(i2);


                inp2.appendChild(i3);
                
                div.appendChild(p1);    
                div.appendChild(inp);
                div.appendChild(inp1);
                div.appendChild(inp2);
        
                document.getElementById('TaskList').appendChild(div);
                n++;
                
        }
}

function completed(){

        this.parentNode.setAttribute('id','completed');
        
        // console.log(this.parentNode.innerHTML);
        
        var random=this.parentNode.innerHTML.split("<");
        var random1=random[1].split(">");
        
        //console.log(random[0]);
        
        localStorage.setItem(`${j}`,random1[1]);
        j++;  
        
        // console.log(this.parentNode);
        
        
        l++;
        localStorage.setItem('l', l);

}

function edit()
{
        var random=this.parentNode.innerHTML.split("<");
        // console.log(random[1]);
        var random1=random[1].split(">");
        console.log(random1[1]); 

        document.getElementById('TaskList1').innerHTML="";
        this.parentNode.innerHTML="";
        
        div = document.createElement('div');
        div.setAttribute("class","all-task-detail")
        // div.innerHTML=localStorage.getItem(`${i}`);
        
        inpu=document.createElement('input');
        inpu.setAttribute("type","text");
        inpu.setAttribute("id","myText1");


         inp=document.createElement('button');
        // inp.innerHTML="submit";
        i1=document.createElement('i');
        i1.setAttribute("class","fa fa-send-o");

      
        inp.setAttribute("type","button");
        
        inp.addEventListener("click",function(){

                NewTask1(random1[1])
                // console.log(this.parentNode.innerHTML);
                this.parentNode.innerHTML="";
                k=localStorage.getItem('k');
                i=k;
        });
        inp.appendChild(i1);
        div.appendChild(inpu);
        div.appendChild(inp);
        
        document.getElementById('TaskList1').appendChild(div);
}

// document.getElementById('myText1').addEventListener('keypress', function (e) {
//         var key = e.which || e.keyCode;
//         if (key === 13) { 
//                 editedTask();          
//         }
//     });

// function editedTask(){
//         NewTask1(random1[1])
//         // console.log(this.parentNode.innerHTML);
//         this.parentNode.innerHTML="";
//         k=localStorage.getItem('k');
//         i=k;
// }

function NewTask1(oldValue)
{
        // this.parentNode.innerHTML="";
        console.log(oldValue);

        //Search for the data 

        i=0;
        k=localStorage.getItem('k');
        while(i<k)
        {
                
                p=localStorage.getItem(`${i}`);
                if(p==oldValue)
                {
                        break;
                }
                i++;        
        }

        a=document.getElementById("myText1").value;
        localStorage.setItem(`${i}`,a);

        //put the value back in task list

        
        div = document.createElement('div');
        div.setAttribute("class","all-task-detail")
        p1=document.createElement('p');
        p1.innerHTML=a;
        p1.setAttribute("class","task-list");
        
        inp=document.createElement('button');
        // inp.innerHTML="completed";
        inp.setAttribute("type","button");
        inp.setAttribute("class","btn btn-info btn-comp");
        inp.addEventListener("click",completed);

        i1=document.createElement('i');
        i1.setAttribute("class","fa fa-check-square-o");
        i1.setAttribute("area-hidden","true");
        
        inp1=document.createElement('button');
        // inp1.innerHTML="Edit";
        inp1.setAttribute("type","button");
        inp1.setAttribute("class","btn btn-info");
        inp1.addEventListener("click",edit);

        i2=document.createElement('i');
        i2.setAttribute("class","fa fa-pencil");
        i2.setAttribute("area-hidden","true");
        
        inp2=document.createElement('button');
        // inp2.innerHTML="delete";
        inp2.setAttribute("type","button");
        inp2.setAttribute("class","btn btn-info");
        inp2.addEventListener("click",deleted);
        i3=document.createElement('i');
        i3.setAttribute("class","fa fa-trash");
        i3.setAttribute("area-hidden","true");
        
       
        inp.appendChild(i1);
        inp1.appendChild(i2);
        inp2.appendChild(i3);


        div.appendChild(p1);    
        div.appendChild(inp);
        div.appendChild(inp1);
        div.appendChild(inp2);
        
        document.getElementById('TaskList').appendChild(div);

}

function deleted()
{
        var random=this.parentNode.innerHTML.split("<");
        var random1=random[1].split(">");
        i=0;
        k=localStorage.getItem('k');
        while(i<k)
        {
                
                p=localStorage.getItem(`${i}`);
                if(p==random1[1])
                {
                        localStorage.removeItem(`${i}`);
                        this.parentNode.innerHTML="";
                        break;
                }
                i++;        
        }
        //this is optional if we only want to make everything good 
        while(i<k)
        {
                l=i;
                i+=1;
                a=localStorage.getItem(`${i}`);
                localStorage.setItem(`${l}`,a);

        }
        k=k-1;
        localStorage.setItem('k',k);


        // Delete from completedTask

        m=0;
        j=100;
        l=localStorage.getItem('l');
  
        
        while(m<l)
        {
                p=localStorage.getItem(`${j}`);
                if(p==random1[1])
                {
                        localStorage.removeItem(`${j}`);
                        console.log(this.parentNode);
                        break;
                }
                j++;
                m++;
        }  
        while(m<l)
        {
                n=j;
                j+=1;
                a=localStorage.getItem(`${j}`);
                localStorage.setItem(`${n}`,a);
                m++;

        }
        l=l-1;
        localStorage.setItem('l',l);


        // Delete from remainingTask

        n=0;
        o=localStorage.getItem('o');
        while(n<o)
        {
                
                p=localStorage.getItem(`r${n}`);
                if(p==random1[1])
                {
                        localStorage.removeItem(`r${n}`);
                        this.parentNode.innerHTML="";
                        break;
                }
                n++;
                
        }
        while(n<0)
        {
                q=n;
                n+=1;
                a=localStorage.getItem(`r${n}`);
                localStorage.setItem(`r${q}`,a);

        }
        o=o-1;
        localStorage.setItem('o',o);

}