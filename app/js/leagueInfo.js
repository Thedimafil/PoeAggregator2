var loadLeagues = function(data, parameters)
{
       var leagues = JSON.parse(data);
       leagues = leagues.result ? leagues.result : leagues;
       var leagueSelect = document.getElementById('league');
       var selectedIndex = 0;
       var currentIndex = 0;
       for(var i = 0; i < leagues.length; i++)
       {
               var league = leagues[i];
               var leagueDescription = league.description ? league.description : (league.text ? league.text : '');

               if(leagueDescription.indexOf('SSF') < 0)
               {
                       var option = document.createElement('option');
                       var leagueId = league.id ? league.id : leagueDescription;
                       if(leagueSelect.lastSavedValue)
                       {
                               if(leagueSelect.lastSavedValue == leagueId)
                               {
                                       selectedIndex = currentIndex;
                               }
                       }
                       else
                       {
                               if(leagueDescription.indexOf('#LeagueStandard') > -1)
                               {
                                       selectedIndex = currentIndex;
                               }
                       }

                       option.value = leagueId;
                       option.appendChild(document.createTextNode(leagueId));

                       leagueSelect.appendChild(option);
                       currentIndex++;
               }
       }
       leagueSelect.selectedIndex = selectedIndex;
};