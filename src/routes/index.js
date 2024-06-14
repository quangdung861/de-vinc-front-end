
import { ROUTER_CLIENT } from "client/routes"
import { ROUTER_ADMIN } from "admin/routes";

export const ROUTES = {
    CLIENT: {
       ...ROUTER_CLIENT
    },
    ADMIN: {
       ...ROUTER_ADMIN
    },
};
