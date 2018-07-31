var id=2;
var users = [];
var bindClickEventOnSignupBtn = function()
{
    $("#signUpBtn").click(function(){
    // $("#login_page").css('display','none');
    // $("#UserInfoTable").css('display','none');
    // $("#signUpContainer").css('display','block');
    $("#loginContainer").hide();
    $("#UserInfoTable").hide();
    $("#signUpContainer").show();
  });
}

var showTableBtn = function()
{
    $('#GemsEssenceBtn').click(function(){
    $("#signUpContainer").hide();
    $("#loginContainer").hide();
    $("#UserInfoTable").show();
  });
}

var bindClickEventOnLoginBtn = function()
{
    $("#loginBtn").click(function(){
    $("#signUpContainer").hide();
    $("#UserInfoTable").hide();
    $("#loginContainer").show();
  });
}

var bindClickEventOnLogoutBtn = function()
{
    $("#logoutBtn").click(function(){
    $("#signUpContainer").hide();
    $("#UserInfoTable").hide();
    $("#loginContainer").show();
  });
}

var signupFormSubmit = function()
{
    $('#signUpForm').submit(function(event)
    {
      event.preventDefault();
      console.log($('#signUpPassword').val())
      console.log($('#signUpConfirmPassword').val())

      if($('#signUpPassword').val() == $('#signUpConfirmPassword').val())
      {
        var newUser = {
        name: $('#name').val(),
        email: $('#email').val(),
        password: $('#signUpPassword').val(),
        city: $('#city').val()
      }
      users.push(newUser);
      alert("Successfully Registered");
      document.getElementById("signUpForm").reset();

      }
      else
      {
        alert("password not match");
      }
    });
}

var submitLoginForm = function()
{
    $('#loginForm').submit(function(event)
    {
      event.preventDefault();
      uemail= $('#loginEmail').val();
      upass= $('#loginPassword').val();

      for(i=0; i<users.length; i++)
      {
        if( uemail==users[i].email && upass== users[i].password )
        {

          $("#signUpContainer").hide();
          $("#loginContainer").hide();
          $("#UserInfoTable").show();
          document.getElementById("loginForm").reset();

          return;
        }
      }
      alert("username or password incorrect");
    });
}

var submitRegistrationForm = function()
{
  $('#addUserRegistrationForm').submit(function(event)
  {
      event.preventDefault();
      newrow = [];
      newrow[1]=$('#addUserName').val();
      newrow[2]=$('#addUserEmail').val();
      newrow[3]=$('#addUserCity').val();
      id++;
      newrow[0]=id;
      newrow[4] = '<button class="editButton">Edit</button>';
      userTable.row.add(newrow).draw(false);
      bindClickEventOnEditBtn();
  });
}

submitEditRegistrationForm = function()
{
    $('#editRegistrationForm').submit(function(event){
    event.preventDefault();
    editname = $('#editName').val();
    editemail =$('#editEmail').val();
    editcity =$('#editCity').val();
    userData[1].innerHTML=editname
    userData[2].innerHTML=editemail
    userData[3].innerHTML=editcity
    $('#editModal').modal('hide');
    // console.log();
   });
}

$(document).ready(function()
{
  userTable = $('#userTable').DataTable();
  bindClickEventOnSignupBtn();
  showTableBtn();
  bindClickEventOnLoginBtn();
  bindClickEventOnLogoutBtn();
  //registeredUserTable();
  signupFormSubmit();
  submitLoginForm();
  submitRegistrationForm();
  bindClickEventOnEditBtn();//pre described data
  submitEditRegistrationForm();
});

//userData = null;
// Need to change this. It can be done with a very easy way!
function bindClickEventOnEditBtn()
{
  // var edit_btns = document.getElementsByClassName('editButton');
  // for(i=0; i<edit_btns.length; i++)
  // {
  //   edit_btns[i].onclick = function(event){ edit_click(event)};
  //   // console.log(edit_btns[i])
  // }

  // var edit_click = function(event)
  // {
    $('.editButton').click(function(){
    // currentElement = event.currentTarget;
    $('#editModal').modal('show');

    userData = $(this).closest('td').siblings();
    $('#editName').val(userData[1].innerHTML) ;
    $('#editEmail').val(userData[2].innerHTML);
    $('#editCity').val(userData[3].innerHTML);
    console.log(userData);
    });
}

// console.log(users[0].email);
