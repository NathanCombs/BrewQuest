import { Injectable } from "@angular/core";

import { User } from "./user";

@Injectable()
export class UserService {
    register(user: User) {
        alert("Created account for " + user.username);
        
    }
}