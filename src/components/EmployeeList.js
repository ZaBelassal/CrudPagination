import React from 'react';

function EmployeeList({posts,deleteItem}) {

  const ListEmployees = posts.length ? 
            posts.map(post =><div key={post.id}>
                                <li>Name :{post.name} Website :{post.website} 
                                <span onClick={()=>deleteItem(post.id)}>X</span>
                                </li>
                              </div> ) : <div>There is no employee to show</div>
  
  return (
    <div>
      EmployeeList
      {ListEmployees}
    </div>
  );
}

export default EmployeeList;
