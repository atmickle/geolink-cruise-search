# GeoLink

GeoLink is a shared language for repositories that house geoscience metadata, science data, and publications related to the same people, projects, and activities
By talking to each other, we have a much better picture of our data in the context of geoscience. To achieve this, GeoLink partners are using Linked Data, a rapidly adopted, open source technology that sits on top of our content systems. Repositories can create RDF translations for different purposes and different communities. 

- Project Site: http://www.geolink.org
- Endpoint: http://data.geolink.org/sparql
- Schema: http://schema.geolink.org/
- Vocabularies: http://schema.geolink.org/voc/index.html

##GeoLink Knowledgebase Component Example
###Search GeoLink for cruises matching a string

*Contributed by Doug Fils, Adam Shepherd, and Audrey Mickle*

Download this repo include the following in your page HTML. 
Note: This script needs to run after the identifying tag appears, in this case, the '''<meta>''' tag.

~~~~
<head>
...
  <script type="text/javascript" src="js/geoLink.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js" crossorigin="anonymous"></script>
  <script src="http://glcomponents.tech/components/glperson-element/bower_components/webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="glCruiseSearch.html"/>
...
</head>
~~~~

The current version of this looks for a specific string. Edit the geolink.js file to identify the string that triggers your search.

More about GLComponents: http://glcomponents.tech/

Other Exameples:
- http://opencoredata.org/doc/resource/people/v1/078d82ba-21df-11e6-8725-c8bcc89d1645
- http://www.bco-dmo.org/deployment/616332?geolink=ecah2016
