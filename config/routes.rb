# == Route Map
#
#                   Prefix Verb     URI Pattern                            Controller#Action
#         new_user_session GET      /auth/sign_in(.:format)                devise_token_auth/sessions#new
#             user_session POST     /auth/sign_in(.:format)                devise_token_auth/sessions#create
#     destroy_user_session DELETE   /auth/sign_out(.:format)               devise_token_auth/sessions#destroy
#        new_user_password GET      /auth/password/new(.:format)           devise_token_auth/passwords#new
#       edit_user_password GET      /auth/password/edit(.:format)          devise_token_auth/passwords#edit
#            user_password PATCH    /auth/password(.:format)               devise_token_auth/passwords#update
#                          PUT      /auth/password(.:format)               devise_token_auth/passwords#update
#                          POST     /auth/password(.:format)               devise_token_auth/passwords#create
# cancel_user_registration GET      /auth/cancel(.:format)                 devise_token_auth/registrations#cancel
#    new_user_registration GET      /auth/sign_up(.:format)                devise_token_auth/registrations#new
#   edit_user_registration GET      /auth/edit(.:format)                   devise_token_auth/registrations#edit
#        user_registration PATCH    /auth(.:format)                        devise_token_auth/registrations#update
#                          PUT      /auth(.:format)                        devise_token_auth/registrations#update
#                          DELETE   /auth(.:format)                        devise_token_auth/registrations#destroy
#                          POST     /auth(.:format)                        devise_token_auth/registrations#create
#    new_user_confirmation GET      /auth/confirmation/new(.:format)       devise_token_auth/confirmations#new
#        user_confirmation GET      /auth/confirmation(.:format)           devise_token_auth/confirmations#show
#                          POST     /auth/confirmation(.:format)           devise_token_auth/confirmations#create
#      auth_validate_token GET      /auth/validate_token(.:format)         devise_token_auth/token_validations#validate_token
#             auth_failure GET      /auth/failure(.:format)                devise_token_auth/omniauth_callbacks#omniauth_failure
#                          GET      /auth/:provider/callback(.:format)     devise_token_auth/omniauth_callbacks#omniauth_success
#                          GET|POST /omniauth/:provider/callback(.:format) devise_token_auth/omniauth_callbacks#redirect_callbacks
#         omniauth_failure GET|POST /omniauth/failure(.:format)            devise_token_auth/omniauth_callbacks#omniauth_failure
#                          GET      /auth/:provider(.:format)              redirect(301)
#        letter_opener_web          /letter_opener                         LetterOpenerWeb::Engine
#            idea_comments GET      /ideas/:idea_id/comments(.:format)     comments#index
#                          POST     /ideas/:idea_id/comments(.:format)     comments#create
#             idea_comment GET      /ideas/:idea_id/comments/:id(.:format) comments#show
#                          PATCH    /ideas/:idea_id/comments/:id(.:format) comments#update
#                          PUT      /ideas/:idea_id/comments/:id(.:format) comments#update
#                          DELETE   /ideas/:idea_id/comments/:id(.:format) comments#destroy
#                    ideas GET      /ideas(.:format)                       ideas#index
#                          POST     /ideas(.:format)                       ideas#create
#                     idea GET      /ideas/:id(.:format)                   ideas#show
#                          PATCH    /ideas/:id(.:format)                   ideas#update
#                          PUT      /ideas/:id(.:format)                   ideas#update
#                          DELETE   /ideas/:id(.:format)                   ideas#destroy
# 
# Routes for LetterOpenerWeb::Engine:
# clear_letters DELETE /clear(.:format)                 letter_opener_web/letters#clear
# delete_letter DELETE /:id(.:format)                   letter_opener_web/letters#destroy
#       letters GET    /                                letter_opener_web/letters#index
#        letter GET    /:id(/:style)(.:format)          letter_opener_web/letters#show
#               GET    /:id/attachments/:file(.:format) letter_opener_web/letters#attachment
# 

Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  if Rails.env.development?
    mount LetterOpenerWeb::Engine, at: "/letter_opener"
  end

  resources :ideas do
    post 'like'
    resources :comments
  end
end
