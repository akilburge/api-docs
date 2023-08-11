"use strict";(self.webpackChunkapi_docs=self.webpackChunkapi_docs||[]).push([[8936],{6924:function(e){e.exports=JSON.parse('{"type":"object","content":{"openapi":"3.0.0","info":{"title":"viagogo Catalog API","version":"1.0.0.65","x-logo":{"url":"https://img.vggcdn.net/img/assets/logo/viagogo_logo_apidocs.png","backgroundColor":"#222222"}},"servers":[{"url":"https://api.viagogo.net","description":"Production"},{"url":"https://sandbox.api.viagogo.net","description":"Sandbox"}],"paths":{"/catalog/events":{"get":{"tags":["Events"],"summary":"List events","description":"Lists all events on the viagogo platform. Use this endpoint to sync the entire viagogo event catalog with your application.","operationId":"Events_GetEvents","parameters":[{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"updated_since","in":"query","description":"Filters the response to only return items that have been updated since the given timestamp","schema":{"type":"string","format":"date-time"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `resource_version`.","schema":{"type":"string"}},{"name":"min_resource_version","in":"query","schema":{"type":"integer","format":"int64","nullable":true}},{"name":"country_code","in":"query","schema":{"type":"string","description":"Filters results to only include events located in the specified country."}},{"name":"latitude","in":"query","schema":{"type":"number","description":"When provided with longitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"longitude","in":"query","schema":{"type":"number","description":"When provided with latitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"max_distance_in_meters","in":"query","schema":{"type":"integer","description":"When provided with latitude and longitude filters events returned to ones within the specified distance of the lat/long.","format":"int32","nullable":true}},{"name":"genre_id","in":"query","schema":{"type":"integer","description":"Filters results to only include events for the specified genre id.","format":"int32","nullable":true}},{"name":"exclude_parking_passes","in":"query","schema":{"type":"boolean","description":"Filters results to remove parking passes","nullable":true}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Events"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]},"put":{"tags":["Events"],"summary":"List events by event ids.","description":"List a specified set of events on the viagogo platform. Note that the eventID being passed can already be merged with another event. And in this case, details of the new event will be returned, if a different eventId is returned then it means that the event has been merged with the returned event. Also inside _embedded field of the response, a mapping between the original eventId and new eventId will be provided. ","operationId":"Events_GetEventsByEventIds","parameters":[{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"updated_since","in":"query","description":"Filters the response to only return items that have been updated since the given timestamp","schema":{"type":"string","format":"date-time"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `resource_version`.","schema":{"type":"string"}},{"name":"min_resource_version","in":"query","schema":{"type":"integer","format":"int64","nullable":true}},{"name":"country_code","in":"query","schema":{"type":"string","description":"Filters results to only include events located in the specified country."}},{"name":"latitude","in":"query","schema":{"type":"number","description":"When provided with longitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"longitude","in":"query","schema":{"type":"number","description":"When provided with latitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"max_distance_in_meters","in":"query","schema":{"type":"integer","description":"When provided with latitude and longitude filters events returned to ones within the specified distance of the lat/long.","format":"int32","nullable":true}},{"name":"genre_id","in":"query","schema":{"type":"integer","description":"Filters results to only include events for the specified genre id.","format":"int32","nullable":true}},{"name":"exclude_parking_passes","in":"query","schema":{"type":"boolean","description":"Filters results to remove parking passes","nullable":true}}],"requestBody":{"x-name":"body","content":{"application/json":{"schema":{"$ref":"#/components/schemas/PutEventsRequest"}}},"required":true},"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Events"}}}},"400":{"$ref":"#/components/responses/validation_failed","description":null},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]}},"/catalog/categories/{categoryId}/events":{"get":{"tags":["Events"],"summary":"List events by category id.","description":"List set of events filtered by category id on the viagogo platform. ","operationId":"Events_GetEventsByCategoryId","parameters":[{"name":"categoryId","in":"path","required":true,"schema":{"type":"integer","format":"int32"}},{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"updated_since","in":"query","description":"Filters the response to only return items that have been updated since the given timestamp","schema":{"type":"string","format":"date-time"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `resource_version`.","schema":{"type":"string"}},{"name":"min_resource_version","in":"query","schema":{"type":"integer","format":"int64","nullable":true}},{"name":"country_code","in":"query","schema":{"type":"string","description":"Filters results to only include events located in the specified country."}},{"name":"latitude","in":"query","schema":{"type":"number","description":"When provided with longitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"longitude","in":"query","schema":{"type":"number","description":"When provided with latitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"max_distance_in_meters","in":"query","schema":{"type":"integer","description":"When provided with latitude and longitude filters events returned to ones within the specified distance of the lat/long.","format":"int32","nullable":true}},{"name":"genre_id","in":"query","schema":{"type":"integer","description":"Filters results to only include events for the specified genre id.","format":"int32","nullable":true}},{"name":"exclude_parking_passes","in":"query","schema":{"type":"boolean","description":"Filters results to remove parking passes","nullable":true}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Events"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]}},"/catalog/events/external_mappings/{platform}/{externalEventId}":{"get":{"tags":["Events"],"summary":"Get an event on the viagogo platform using an identifier from an external platform.","operationId":"Events_GetEventByExternalEventId","parameters":[{"name":"platform","in":"path","required":true,"description":"The name of the external platform. Can be `legacy_stubhub`","schema":{"type":"string","nullable":true}},{"name":"externalEventId","in":"path","required":true,"description":"The event identifier from the external platform.","schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Event"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]}},"/catalog/events/{eventId}":{"get":{"tags":["Events"],"summary":"Get an event","description":"Note that the eventID being passed can already be merged with another event. And in this case, details of the new event will be returned, if a different eventId is returned then it means that the event has been merged with the returned event. Also inside _embedded field of the response, a mapping between the original eventId and new eventId will be provided.","operationId":"Events_GetEvent","parameters":[{"name":"eventId","in":"path","required":true,"description":"The event identifier","schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Event"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]}},"/catalog/events/search":{"get":{"tags":["Events"],"summary":"Search events","description":"Search for events on the viagogo platform. Use this endpoint to search the entire viagogo event catalog with your application.","operationId":"Events_SearchEvents","parameters":[{"name":"q","in":"query","description":"The query text to be used to match events.","schema":{"type":"string","nullable":true}},{"name":"dateLocal","in":"query","description":"The specific date of the event, this is optional","schema":{"type":"string","format":"date-time","nullable":true}},{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"updated_since","in":"query","description":"Filters the response to only return items that have been updated since the given timestamp","schema":{"type":"string","format":"date-time"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `resource_version`.","schema":{"type":"string"}},{"name":"min_resource_version","in":"query","schema":{"type":"integer","format":"int64","nullable":true}},{"name":"country_code","in":"query","schema":{"type":"string","description":"Filters results to only include events located in the specified country."}},{"name":"latitude","in":"query","schema":{"type":"number","description":"When provided with longitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"longitude","in":"query","schema":{"type":"number","description":"When provided with latitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"max_distance_in_meters","in":"query","schema":{"type":"integer","description":"When provided with latitude and longitude filters events returned to ones within the specified distance of the lat/long.","format":"int32","nullable":true}},{"name":"genre_id","in":"query","schema":{"type":"integer","description":"Filters results to only include events for the specified genre id.","format":"int32","nullable":true}},{"name":"exclude_parking_passes","in":"query","schema":{"type":"boolean","description":"Filters results to remove parking passes","nullable":true}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Events"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]}},"/catalog/categories/{categoryId}/allevents":{"get":{"tags":["Events"],"summary":"Get all events under a CategoryId","description":"Finds all CategoryIds under the parents, and finds all events under all of them- de-duped by storing in a HashSet.","operationId":"Events_GetAllEventsByCategoryId","parameters":[{"name":"categoryId","in":"path","required":true,"description":"CategoryId for which we want all events","schema":{"type":"integer","format":"int32"}},{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"updated_since","in":"query","description":"Filters the response to only return items that have been updated since the given timestamp","schema":{"type":"string","format":"date-time"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `resource_version`.","schema":{"type":"string"}},{"name":"min_resource_version","in":"query","schema":{"type":"integer","format":"int64","nullable":true}},{"name":"country_code","in":"query","schema":{"type":"string","description":"Filters results to only include events located in the specified country."}},{"name":"latitude","in":"query","schema":{"type":"number","description":"When provided with longitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"longitude","in":"query","schema":{"type":"number","description":"When provided with latitude and distance filters events returned to ones within the specified distance of the lat/long.","format":"double","nullable":true}},{"name":"max_distance_in_meters","in":"query","schema":{"type":"integer","description":"When provided with latitude and longitude filters events returned to ones within the specified distance of the lat/long.","format":"int32","nullable":true}},{"name":"genre_id","in":"query","schema":{"type":"integer","description":"Filters results to only include events for the specified genre id.","format":"int32","nullable":true}},{"name":"exclude_parking_passes","in":"query","schema":{"type":"boolean","description":"Filters results to remove parking passes","nullable":true}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Events"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:events"]}]}},"/catalog/venues":{"get":{"tags":["Venues"],"summary":"List venues","description":"Lists all venues on the viagogo platform. Use this endpoint to sync the entire viagogo Venue catalog with your application.","operationId":"Venues_GetVenues","parameters":[{"name":"page","in":"query","description":"Specifies which page of data to retrieve.","schema":{"type":"integer","format":"int32"}},{"name":"page_size","in":"query","description":"Set custom page sizes on response.","schema":{"type":"integer","format":"int32"}},{"name":"updated_since","in":"query","description":"Filters the response to only return items that have been updated since the given timestamp","schema":{"type":"string","format":"date-time"}},{"name":"sort","in":"query","description":"Determines the ordering of items. A comma-separated string containing `resource_version`.","schema":{"type":"string"}},{"name":"country_code","in":"query","schema":{"type":"string","description":"Filters results to only include venues located in the specified country."}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Venues"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:venues"]}]}},"/catalog/venues/{venueId}":{"get":{"tags":["Venues"],"summary":"Get a venue","operationId":"Venues_GetVenue","parameters":[{"name":"venueId","in":"path","required":true,"description":"The venue identifier","schema":{"type":"integer","format":"int32"}}],"responses":{"200":{"description":"","content":{"application/hal+json":{"schema":{"$ref":"#/components/schemas/Venue"}}}},"401":{"$ref":"#/components/responses/requires_authentication","description":null},"403":{"$ref":"#/components/responses/forbidden","description":null},"404":{"$ref":"#/components/responses/not_found","description":null},"500":{"$ref":"#/components/responses/internal_server_error","description":null}},"security":[{"OAuth2":["read:venues"]}]}}},"components":{"schemas":{"Events":{"type":"object","additionalProperties":false,"properties":{"total_items":{"type":"integer","format":"int32","nullable":true},"page":{"type":"integer","format":"int32","nullable":true},"page_size":{"type":"integer","format":"int32","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventsLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventsEmbeddedResources"}]}}},"EventsLinks":{"title":"EventsLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"first":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"last":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"next":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"prev":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"Link":{"type":"object","additionalProperties":false,"properties":{"href":{"type":"string","nullable":true},"title":{"type":"string","nullable":true},"templated":{"type":"boolean"}}},"EventsEmbeddedResources":{"title":"EventsEmbeddedResources","type":"object","properties":{"deleted_items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/Event"}},"items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/Event"}}}},"Event":{"type":"object","description":"An event on the viagogo platform.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The event identifier.","format":"int32"},"name":{"type":"string","description":"The name of the event."},"start_date":{"type":"string","description":"The date when the event starts.","format":"date-time"},"end_date":{"type":"string","description":"The date when the event ends.","format":"date-time","nullable":true},"on_sale_date":{"type":"string","description":"The date when tickets for the event will go onsale.","format":"date-time","nullable":true},"date_confirmed":{"type":"boolean","description":"True if the event start and end date have been confirmed; Otherwise, false."},"time_confirmed":{"type":"boolean","description":"True if the event start and end time have been confirmed; Otherwise, false."},"type":{"type":"string","description":"The type of the event. Can be `Main` or `Parking`"},"min_ticket_price":{"description":"The minimum ticket price of the event.","oneOf":[{"$ref":"#/components/schemas/Money"}]},"status":{"type":"string","description":"The status of the event. Can be `Normal`, `Postponed`, `Cancelled`, `Rescheduled`, `Relocated`, `RelocatedAndRescheduled`, `Draft`, `Contingent` and `Deleted`"},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventEmbeddedResources"}]}}},"Money":{"type":"object","description":"Returned for monetary values, such as ticket prices, fees charged and tax amounts.","additionalProperties":false,"properties":{"amount":{"type":"number","description":"The decimal amount of the money.","format":"decimal","nullable":true},"currency_code":{"type":"string","description":"The ISO 4217 currency code that the monetary value is represented in."},"display":{"type":"string","description":"A user-friendly string representing the monetary value."}}},"EventLinks":{"title":"EventLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"event:webpage":{"description":"Url on the website for the event","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EventEmbeddedResources":{"title":"EventEmbeddedResources","type":"object","properties":{"categories":{"type":"array","description":"The categories for this event.","nullable":true,"items":{"$ref":"#/components/schemas/EventCategory"}},"external_mappings":{"type":"array","description":"The external mappings for this event","nullable":true,"items":{"$ref":"#/components/schemas/EmbeddedExternalMapping"}},"genre":{"description":"The genre for this event.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedCategory"}]},"merged_events":{"type":"array","description":"The events that have been merged into this event.","nullable":true,"items":{"$ref":"#/components/schemas/MergedEntity"}},"venue":{"description":"The venue where the event is taking place.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenue"}]}}},"EventCategory":{"type":"object","description":"A Category represents a grouping of events or other categories. Examples are \u201cConcerts\u201d, \u201cRock and Pop\u201d and \u201cLady Gaga\u201d.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The category identifier.","format":"int32"},"name":{"type":"string","description":"The name of the category."},"role":{"type":"string","description":"The role of the category for a particular event. Can be `MainArtist`, `SupportingArtist`, `HomeTeam`, `AwayTeam`, `Tournament`, `HeadlineAct`, `StandardAct`, `Festival`, `SportsLeague`, `ConcertTour`.","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventCategoryLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EventCategoryEmbeddedResources"}]}}},"EventCategoryLinks":{"title":"EventCategoryLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EventCategoryEmbeddedResources":{"title":"EventCategoryEmbeddedResources","type":"object","properties":{"external_mappings":{"type":"array","description":"The external mappings for this category","nullable":true,"items":{"$ref":"#/components/schemas/EmbeddedExternalMapping"}},"merged_categories":{"type":"array","description":"The categories that have been merged into this category.","nullable":true,"items":{"$ref":"#/components/schemas/MergedEntity"}}}},"EmbeddedExternalMapping":{"type":"object","description":"An external mapping between a resource on the viagogo platform and the same resource on another platforms. ","additionalProperties":false,"properties":{"id":{"type":"string","description":"The identifier of the resource in the external platform"},"platform_name":{"type":"string","description":"The name of the external platform. Can be `legacy_stubhub`."},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedExternalMappingLinks"}]}}},"EmbeddedExternalMappingLinks":{"title":"EmbeddedExternalMappingLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"MergedEntity":{"type":"object","description":"An entity that has been merged into another entity.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The identifier for this entity.","format":"int32"}}},"EmbeddedCategory":{"type":"object","description":"A Category represents a grouping of events or other categories. Examples are \u201cConcerts\u201d, \u201cRock and Pop\u201d and \u201cLady Gaga\u201d.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The category identifier.","format":"int32"},"name":{"type":"string","description":"The name of the category."},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedCategoryLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedCategoryEmbeddedResources"}]}}},"EmbeddedCategoryLinks":{"title":"EmbeddedCategoryLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EmbeddedCategoryEmbeddedResources":{"title":"EmbeddedCategoryEmbeddedResources","type":"object","properties":{"external_mappings":{"type":"array","description":"The external mappings for this category","nullable":true,"items":{"$ref":"#/components/schemas/EmbeddedExternalMapping"}},"merged_categories":{"type":"array","description":"The categories that have been merged into this category.","nullable":true,"items":{"$ref":"#/components/schemas/MergedEntity"}}}},"EmbeddedVenue":{"type":"object","description":"A venue is a location where an event takes place.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The venue identifier.","format":"int32"},"name":{"type":"string","description":"The name of the venue."},"city":{"type":"string","description":"The name of the city where the venue is located."},"state_province":{"type":"string","description":"The name of the State or Province where the venue is located."},"postal_code":{"type":"string","description":"The postal code for the venue."},"latitude":{"type":"number","description":"The latitude for the venue.","format":"double","nullable":true},"longitude":{"type":"number","description":"The longitude for the venue.","format":"double","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenueLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/EmbeddedVenueEmbeddedResources"}]}}},"EmbeddedVenueLinks":{"title":"EmbeddedVenueLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"EmbeddedVenueEmbeddedResources":{"title":"EmbeddedVenueEmbeddedResources","type":"object","properties":{"country":{"description":"The Country where the venue is located.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Country"}]},"external_mappings":{"type":"array","description":"The external mappings for this venue","nullable":true,"items":{"$ref":"#/components/schemas/EmbeddedExternalMapping"}}}},"Country":{"type":"object","additionalProperties":false,"properties":{"code":{"type":"string","description":"The two-letter ISO 3166 code for the country."},"name":{"type":"string","description":"The name of the country."},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/CountryLinks"}]}}},"CountryLinks":{"title":"CountryLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"Error":{"type":"object","additionalProperties":false,"properties":{"code":{"type":"string"},"message":{"type":"string"},"errors":{"type":"object","additionalProperties":{"type":"array","items":{"type":"string"}}}}},"PutEventsRequest":{"type":"object","additionalProperties":false,"properties":{"event_ids":{"type":"array","description":"The viagogo event identifiers of the events to be retrieved.","items":{"type":"integer","format":"int32"}}}},"Venues":{"type":"object","additionalProperties":false,"properties":{"total_items":{"type":"integer","format":"int32","nullable":true},"page":{"type":"integer","format":"int32","nullable":true},"page_size":{"type":"integer","format":"int32","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/VenuesLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/VenuesEmbeddedResources"}]}}},"VenuesLinks":{"title":"VenuesLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"first":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"last":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"next":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]},"prev":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"VenuesEmbeddedResources":{"title":"VenuesEmbeddedResources","type":"object","properties":{"deleted_items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/Venue"}},"items":{"type":"array","nullable":true,"items":{"$ref":"#/components/schemas/Venue"}}}},"Venue":{"type":"object","description":"An venue on the viagogo platform.","additionalProperties":false,"properties":{"id":{"type":"integer","description":"The venue identifier.","format":"int32"},"name":{"type":"string","description":"The name of the venue."},"city":{"type":"string","description":"The name of the city where the venue is located."},"state_province":{"type":"string","description":"The name of the State or Province where the venue is located."},"postal_code":{"type":"string","description":"The postal code for the venue."},"latitude":{"type":"number","description":"The latitude for the venue.","format":"double","nullable":true},"longitude":{"type":"number","description":"The longitude for the venue.","format":"double","nullable":true},"_links":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/VenueLinks"}]},"_embedded":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/VenueEmbeddedResources"}]}}},"VenueLinks":{"title":"VenueLinks","type":"object","properties":{"self":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Link"}]}}},"VenueEmbeddedResources":{"title":"VenueEmbeddedResources","type":"object","properties":{"country":{"description":"The Country where the venue is located.","nullable":true,"oneOf":[{"$ref":"#/components/schemas/Country"}]},"external_mappings":{"type":"array","description":"The external mappings for this venue","nullable":true,"items":{"$ref":"#/components/schemas/EmbeddedExternalMapping"}}}}},"responses":{"requires_authentication":{"description":"Authentication credentials were missing or incorrect.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"not_found":{"description":"The URI requested is invalid or the resource requested, such as an event, does not exist.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"forbidden":{"description":"The request is understood, but it has been refused or access is not allowed. An accompanying error message will explain why.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"internal_server_error":{"description":"Internal server error","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}},"validation_failed":{"description":"The request data is not valid. errors will contain an object with a localized message that describes the validation error for each property of the data.","content":{"application/hal+json":{"schema":{"nullable":true,"oneOf":[{"$ref":"#/components/schemas/Error"}]}}}}},"parameters":{"fields":{"in":"query","description":"A comma-separated list of the name(s) of the field(s) to be returned."},"embed":{"in":"query","description":"Optional embedded resources are only included in a resource when your application includes the embedded property name(s) as a comma-separated value in the embed parameter."}},"headers":{"Content-Language":{"schema":{"type":"string"},"example":"en-US"},"Content-Type":{"schema":{"type":"string"},"example":"application/hal+json"},"VGG-Topic":{"description":"Name of the topic that triggered this delivery","schema":{"type":"string"},"example":"Ping"},"VGG-DeliveryId":{"description":"Unique identifier for this delivery","schema":{"type":"string"},"example":"1993433"}},"securitySchemes":{"OAuth2":{"type":"oauth2","bearerFormat":"JWT","flows":{"implicit":{"authorizationUrl":"https://account.viagogo.com/authorize","tokenUrl":"https://account.viagogo.com/oauth2/token","refreshUrl":"https://account.viagogo.com/oauth2/token"},"clientCredentials":{"tokenUrl":"https://account.viagogo.com/oauth2/token"},"authorizationCode":{"authorizationUrl":"https://account.viagogo.com/authorize","tokenUrl":"https://account.viagogo.com/oauth2/token","refreshUrl":"https://account.viagogo.com/oauth2/token"}}}}},"security":[{"OAuth2":["read:events","read:venues"]}],"tags":[{"name":"BasicType_Money","description":"Returned for monetary values, such as ticket prices, fees charged and tax amounts.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Money\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Money"},{"name":"Events","description":"View events on the viagogo platform"},{"name":"Resource_Event","description":"An event on the viagogo platform.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Event\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Event"},{"name":"Resource_Events","description":"\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Events\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Events"},{"name":"Resource_Venue","description":"An venue on the viagogo platform.\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Venue\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Venue"},{"name":"Resource_Venues","description":"\\n<SchemaDefinition schemaRef=\\"#/components/schemas/Venues\\" showReadOnly={true} showWriteOnly={true} />","x-displayName":"Venues"},{"name":"Venues","description":"View venues on the viagogo platform"}],"x-tagGroups":[{"name":"Endpoints","tags":["Events","Venues"]},{"name":"Basic Types","tags":["BasicType_Money"]},{"name":"Resources","tags":["Resource_Event","Resource_Events","Resource_Venue","Resource_Venues"]}]}}')}}]);