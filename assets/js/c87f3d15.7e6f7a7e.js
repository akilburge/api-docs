"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[8936],{6924:function(e){e.exports=JSON.parse('{"type":"object","content":{"openapi":"3.0.0","info":{"title":"viagogo Catalog API","version":"1.0.0.10","x-logo":{"url":"https://img.vggcdn.net/img/assets/logo/viagogo_logo_apidocs.png","backgroundColor":"#222222"}},"servers":[{"url":"https://api.viagogo.net/catalog","description":"Production"},{"url":"https://sandbox.api.viagogo.net/catalog","description":"Sandbox"}],"paths":{"/events":{"get":{"tags":["Events"],"summary":"List events","description":"Lists all events on the viagogo platform. Use this endpoint to sync the entire viagogo event catalog with your application.","operationId":"Events_GetEvents","parameters":[{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"updated_since","in":"query","description":"Filters the response to only return items that have been updated since the given timestamp","schema":{"type":"string","format":"date-time"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `resource_version`.","schema":{"type":"string"}},{"name":"min_resource_version","in":"query","schema":{"type":"integer","format":"int64","nullable":true}},{"name":"country_code","in":"query","schema":{"type":"string","description":"Filters results to only include events located in the specified country."}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Events"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]}},"/events/{eventId}":{"get":{"tags":["Events"],"summary":"Get an event","operationId":"Events_GetEvent","parameters":[{"name":"eventId","in":"path","required":true,"description":"The event identifier","schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Event"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]}}},"components":{"schemas":{"Events":{"type":"object","additionalProperties":false,"properties":{"total_items":{"type":"integer","format":"int32","nullable":true},"page":{"type":"integer","format":"int32","nullable":true},"page_size":{"type":"integer","format":"int32","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventsLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventsEmbeddedResources"}]}}},"EventsLinks":{"title":"EventsLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"first":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"last":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"next":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"prev":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"Link":{"type":"object","additionalProperties":false,"properties":{"href":{"type":"string","nullable":true},"title":{"type":"string","nullable":true},"templated":{"type":"boolean"}}},"EventsEmbeddedResources":{"title":"EventsEmbeddedResources","type":"object","properties":{"deleted_items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/Event"}},"items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/Event"}}}},"Event":{"type":"object","description":"An event on the viagogo platform.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The event identifier.","format":"int32"},"name":{"type":"string","description":"The name of the event."},"start_date":{"type":"string","description":"The date when the event starts.","format":"date-time"},"end_date":{"type":"string","description":"The date when the event ends.","format":"date-time","nullable":true},"on_sale_date":{"type":"string","description":"The date when tickets for the event will go onsale.","format":"date-time","nullable":true},"date_confirmed":{"type":"boolean","description":"True if the event start and end date have been confirmed; Otherwise, false."},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventEmbeddedResources"}]}}},"EventLinks":{"title":"EventLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EventEmbeddedResources":{"title":"EventEmbeddedResources","type":"object","properties":{"categories":{"type":"array","description":"The categories for this event.","nullable":true,"items":{"$ref":"#/components/schemas/EmbeddedCategory"}},"genre":{"description":"The genre for this event.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedCategory"}]},"venue":{"description":"The venue where the event is taking place.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenue"}]}}},"EmbeddedCategory":{"type":"object","description":"A Category represents a grouping of events or other categories. Examples are \u201cConcerts\u201d, \u201cRock and Pop\u201d and \u201cLady Gaga\u201d.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The category identifier.","format":"int32"},"name":{"type":"string","description":"The name of the category."},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedCategoryLinks"}]}}},"EmbeddedCategoryLinks":{"title":"EmbeddedCategoryLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EmbeddedVenue":{"type":"object","description":"A venue is a location where an event takes place.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The venue identifier.","format":"int32"},"name":{"type":"string","description":"The name of the venue."},"city":{"type":"string","description":"The name of the city where the venue is located."},"state_province":{"type":"string","description":"The name of the State or Province where the venue is located."},"latitude":{"type":"number","description":"The latitude for the venue.","format":"double","nullable":true},"longitude":{"type":"number","description":"The longitude for the venue.","format":"double","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenueLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenueEmbeddedResources"}]}}},"EmbeddedVenueLinks":{"title":"EmbeddedVenueLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EmbeddedVenueEmbeddedResources":{"title":"EmbeddedVenueEmbeddedResources","type":"object","properties":{"country":{"description":"The Country where the venue is located.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Country"}]}}},"Country":{"type":"object","additionalProperties":false,"properties":{"code":{"type":"string","description":"The two-letter ISO 3166 code for the country."},"name":{"type":"string","description":"The name of the country."},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/CountryLinks"}]}}},"CountryLinks":{"title":"CountryLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"Error":{"type":"object","additionalProperties":false,"properties":{"code":{"type":"string"},"message":{"type":"string"},"errors":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}}}}}},"responses":{"requires_authentication":{"description":"Authentication credentials were missing or incorrect.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"not_found":{"description":"The URI requested is invalid or the resource requested, such as an event, does not exist.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"forbidden":{"description":"The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"internal_server_error":{"description":"Internal server error","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"validation_failed":{"description":"The request data is not valid. errors will contain an object with a localized message that describes the validation error for each property of the data.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}}},"parameters":{"fields":{"in":"query","description":"A comma-separated list of the name(s) of the field(s) to be returned."},"embed":{"in":"query","description":"Optional embedded resources are only included in a resource when your application includes the embedded property name(s) as a comma-separated value in the embed parameter."}},"headers":{"Content-Language":{"schema":{"type":"string"},"example":"en-US"},"Content-Type":{"schema":{"type":"string"},"example":"application/hal+json"},"VGG-Topic":{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},"VGG-DeliveryId":{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}},"securitySchemes":{"OAuth2":{"type":"oauth2","bearerFormat":"JWT","flows":{"implicit":{"authorizationUrl":"https://account.viagogo.com/authorize","tokenUrl":"https://account.viagogo.com/oauth2/token","refreshUrl":"https://account.viagogo.com/oauth2/token"},"clientCredentials":{"tokenUrl":"https://account.viagogo.com/oauth2/token"},"authorizationCode":{"authorizationUrl":"https://account.viagogo.com/authorize","tokenUrl":"https://account.viagogo.com/oauth2/token","refreshUrl":"https://account.viagogo.com/oauth2/token"}}}}},"security":[{"OAuth2":["read:events"]}],"tags":[{"name":"Events","description":"View events on the viagogo platform"},{"name":"Resource_Event","description":"An event on the viagogo platform.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Event\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Event"},{"name":"Resource_Events","description":"\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Events\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Events"}],"x-tagGroups":[{"name":"Endpoints","tags":["Events"]},{"name":"Resources","tags":["Resource_Event","Resource_Events"]}]}}')}}]);