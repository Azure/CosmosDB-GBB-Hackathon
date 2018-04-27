module.exports = {
    API_MODE: 'MONGO',
    
    DOCUMENT_DB_ENDPOINT:         '',
    DOCUMENT_DB_PRIMARYKEY:       '',
    DOCUMENT_DB_DATABASE:         'contosoairdb',
                                  
    DOCUMENT_DB_FLIGHT:           'FlightsCollection',
    DOCUMENT_DB_SEAT:             'SeatsCollection',
    DOCUMENT_DB_DEAL:             'DealsCollection',
    DOCUMENT_DB_BOOKING:          'BookingsCollection',
    DOCUMENT_DB_PREFERRED_REGION: 'West US',
                                  
    AZURE_FUNCTION_DEALS_URL:     '',
	                              
    MONGO_DB_CONNECTION_STRING:   'mongodb://localhost:27017/contosoairdb3',
    MONGO_DB_COLLECTION: 'feedbackdb',
    Mongo_DB_FLIGHT_Partitioned: 'FlightsCollectionPartitioned'
};
