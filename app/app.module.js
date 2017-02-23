"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var homepage_component_1 = require("./homepage/homepage.component");
var email_component_1 = require("./email/email.component");
var app_routing_module_1 = require("./app-routing.module");
var portfolioList_component_1 = require("./portfolio/portfolioList.component");
var ng2_page_scroll_1 = require("ng2-page-scroll/ng2-page-scroll");
var footer_component_1 = require("./footer/footer.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule,
            ng2_page_scroll_1.Ng2PageScrollModule.forRoot(),
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        declarations: [
            app_component_1.AppComponent,
            homepage_component_1.HomepageComponent,
            email_component_1.EmailComponent,
            portfolioList_component_1.PortfolioListComponent,
            footer_component_1.FooterComponent,
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map