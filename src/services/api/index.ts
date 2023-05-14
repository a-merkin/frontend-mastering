import * as authorization from "../api/rest/authorization"
import * as users from "../api/rest/users"
import * as logout from "../api/rest/logout"
import * as registration from "../api/rest/registration"

import config from "../api/config"

const { setToken } = config

export { authorization, setToken, users, logout, registration }
