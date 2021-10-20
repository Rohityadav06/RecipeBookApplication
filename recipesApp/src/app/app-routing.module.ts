import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FriendComponent } from './friend/friend.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"createRecipe", component:AddRecipeComponent},
  {path:"home", component:HomeComponent},
  {path:"friends", component:SearchFriendsComponent},
  {path:"friendList",component:FriendComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
