import { Outlet , Navigate} from 'react-router-dom'
// import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

function OnlyAdminPrivateRoute() {

    return (  <Outlet/>  

  )
}

export default OnlyAdminPrivateRoute