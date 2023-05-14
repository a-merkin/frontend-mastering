import * as authorization from "../api/rest/authorization"
import * as users from "../api/rest/users"

import config from "../api/config"

const { setToken } = config

export { authorization, setToken, users }
