<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome <%=session.getAttribute("name")%></title>

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>

<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
<script
	src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-route.js"></script>

<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
	integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7"
	crossorigin="anonymous">
<script src="javascript/app.js"></script>

<script src="javascript/controllers/main.js"></script>
<script src="javascript/controllers/cbcrController.js"></script>
<script src="javascript/service/cbcrs.js"></script>


<!--script src="javascript/angular-ui-router.min.js"></script-->

<link rel="stylesheet"
	href="${pageContext.request.contextPath}/css/app.css" />

</head>

<body ng-app="tieappApp">

	<div class="container">
		<aside class="sidebar">
			<h2 class="logo">
				<a href="#/write">TIE<strong>app</strong></a> <span><h6>
						For
						<%=session.getAttribute("name")%></h6></span>
			</h2>

			<nav class="main-nav">

				<div id="composenew">
					<button type="button" class="btn btn-primary">Compose New
						Tax Msg</button>
				</div>
				<div id="inbox">
					<ul>

						<li><button type="button" class="btn btn-primary btn-md">Inbox</button></li>


						<li><button type="button" class="btn btn-primary btn-md">Sent</button></li>


						<li><button type="button" class="btn btn-primary btn-md">Draft</button></li>

					</ul>
				</div>
				<div id="searchby">
					
						
						<button type="button" class="btn btn-primary btn-md">
							Search By ... &nbsp &nbsp &nbsp &nbsp<span class="glyphicon glyphicon-search"></span>
						</button>
				

					<table style="width: 100%">
						<tr>
							<th>Doc Type:</th>
							<td><select class="form-control" id="sel1">
									<option>CBCR</option>
									<option>Other</option>
							</select></td>
						</tr>
						<tr>
							<th>From User:</th>
							<td><textarea class="form-control" id="exampleTextarea"
									rows="1" cols="10"></textarea></td>
						</tr>
						<tr>
							<th>From Country:</th>
							<td><textarea class="form-control" id="exampleTextarea"
									rows="1" cols="10"></textarea></td>
						</tr>
						<tr>
							<th>To user:</th>
							<td><textarea class="form-control" id="exampleTextarea"
									rows="1" cols="10"></textarea></td>
						</tr>
						<tr>
							<th>To Country:</th>
							<td><textarea class="form-control" id="exampleTextarea"
									rows="1" cols="10"></textarea></td>
						</tr>
						<tr>
							<th>From Date:</th>
							<td><textarea class="form-control" id="exampleTextarea"
									rows="1" cols="10"></textarea></td>
						</tr>
						<tr>
							<th>To Date:</th>
							<td><textarea class="form-control" id="exampleTextarea"
									rows="1" cols="10"></textarea></td>
						</tr>
					</table>
				</div>
				<div id="mnc">
					<ul>
						<li><a>a</a></li>

					</ul>
				</div>



			</nav>
		</aside>
		<div class="main">
			<header class="header">
				<!--  form action="">
					<input type="search" name="s" placeholder="Global Search" />
				</form>
			<a href="#/read"
					class="btn btn-primary">All Cbcr <span
					class="glyphicon glyphicon-envelope"></span></a>

				<nav class="nav-settings">
					<ul>
						<li><a href="#">Hi! <%=session.getAttribute("name")%></a></li>
						<li><a href="#" class="icon icon-gear"></a></li>
					</ul>
				</nav-->
				<nav class="nav-settings">
					<a><label for="sel1">Language</label></a> <select
						class="form-control" id="sel1">
						<option>EN</option>
						<option>SP</option>
						<option>CN</option>

					</select>
					</nav-->
					<div class="clr"></div>
			</header>

			<!--  div  class="container"-->
			<!--div ng-include="'views/main.html'" ng-controller="MainCtrl"></div-->
			<div class="table">

				<div ng-view></div>
			</div>
			<!--  /div-->


		</div>

	</div>
	<div class="footer">
		<div class="container">
			<p>Copy Right @ Adam Wang</p>
		</div>
	</div>


</body>
</html>