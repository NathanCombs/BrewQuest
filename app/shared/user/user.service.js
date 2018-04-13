"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        return this.http.post(config_1.Config.apiUrl + "/signUp", JSON.stringify({
            username: user.username,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    UserService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", config_1.Config.authHeader);
        return headers;
    };
    UserService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUN4RCw4Q0FBNkM7QUFDN0MsbUNBQWlDO0FBQ2pDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFHL0Isb0NBQW1DO0FBR25DO0lBQ0UscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUcsQ0FBQztJQUVsQyw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGVBQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxFQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDckM7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEI7UUFDRSxJQUFJLE9BQU8sR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsZUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELGtDQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBekJVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFZSxXQUFJO09BRG5CLFdBQVcsQ0EwQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL2NhdGNoXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQ29uZmlnLmFwaVVybCArIFwiL3NpZ25VcFwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgKVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBnZXRDb21tb25IZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIENvbmZpZy5hdXRoSGVhZGVyKTtcbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cbn0iXX0=