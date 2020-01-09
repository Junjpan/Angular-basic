import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './app/course/course.component';
import { PostService } from './services/post.service'
import { CourseService } from './app/course/course.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LessonComponent } from './lesson/lesson.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCasePipe } from './title-case.pipe';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { PasswordFormComponent } from './password-form/password-form.component';
import { PostsComponent } from './posts/posts.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowerComponent } from './follower/follower.component';
import { FollowerService } from './services/follower.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {RouterModule} from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CourseComponent,
    LessonComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCasePipe,
    PanelComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    CourseFormComponent,
    NewCourseComponent,
    PasswordFormComponent,
    PostsComponent,
    FollowerComponent,
    NavbarComponent,
    HomeComponent,
    GithubprofileComponent,
    NotfoundComponent,
    ArchiveComponent
  ],
  imports: [   
BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:"",component:HomeComponent}, //empty path mean homepage or default route
      {path:"archive/:year/:month",component:ArchiveComponent},
      {path:"followers/:id/:username",component:GithubprofileComponent},
      {path:"followers/:userid",component:FollowerComponent},
      {path:"posts",component:PostsComponent},
      {path:"**",component:NotfoundComponent}
  ])
  ],
  providers: [FollowerService,PostService,CourseService,{provide:ErrorHandler,useClass:AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
