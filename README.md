# Architecture

This project shows how angular is flexible in designing repetitive and configurable views. It could be useful in some certain cases: 
- where a lot of data is presented, and it should look similar across all pages
- when each view needs to be shared via link
- ...


Let's assume that we build a page, where we want a page that shows items from Star Wars (it uses swapi.dev as api).

"films": "https://swapi.dev/api/films/",
"people": "https://swapi.dev/api/people/",
"planets": "https://swapi.dev/api/planets/",
"species": "https://swapi.dev/api/species/",
"starships": "https://swapi.dev/api/starships/",
"vehicles": "https://swapi.dev/api/vehicles/"

routing structure:
```
Films
  Table 
Machines
  Tabs: 
    StarshipsTable
      Actions: View, Add
    VehiclesList
      Actions: View, Add, Delete
Creatures:
    Tabs: 
    PeopleTable
      Actions: View, Add
    SpeciesList
      Actions: View, Add, Delete
Configurator:
  Stepper:
    SelectPlanet
    SelectMachine 
      Tabs:
        Vehicle
        Starship
    

```
