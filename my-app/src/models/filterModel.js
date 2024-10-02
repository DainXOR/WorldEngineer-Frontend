// Create a class that represents the query parameters for a request.
// The properties will work as filters for the request.
// The properties should be optional and have a default value.

export class GeneralFilter {
    #beginCreationDate
    #endCreationDate

    #beginUpdateDate
    #endUpdateDate

    #beginDeleteDate
    #endDeleteDate
}

export class UserFilter extends GeneralFilter {
    #username
    #email
    #idStatus
    #idProject
    #idContact
}