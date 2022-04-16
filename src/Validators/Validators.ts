/**
 * @module @craigmcc/shared-utils/Validators
 *
 * @description
 * Standard (across applications) validation methods that can be used both by
 * backend database interactions and frontend UI comonents.  In all cases, a
 * "true" return value indicates that the proposed value is valid, while "false"
 * means that it is not.  If a field is required, that must be validated separately.
 */

// Public Objects ------------------------------------------------------------

const Validators = {

    /**
     * Validate a date string (YYYY-MM-DD format).
     *
     * @param {string} date                 Date string to be validated
     * @return {boolean}                    True if the date string is valid or empty
     */
    date (date: string): boolean {
        if (!date || (date.length === 0)) {
            return true;
        } else {
            // NOTE - range check on each component?
            return datePattern.test(date);
        }
    },

    /**
     * Validate an email address against an appropriate pattern.
     *
     * @param {string} email                Email address to be validated
     * @return {boolean}                    True if the email address is valid or empty
     */
    email (email: string): boolean {
        if (!email || (email.length === 0)) {
            return true;
        } else {
            return emailPattern.test(email);
        }
    },

    /**
     * Validate a month string (YYYY-MM format).
     *
     * @param {string} month                Month string to be validated
     * @return {boolean}                    True if the month string is valid or empty
     */
    month (month: string): boolean {
        if (!month || (month.length === 0)) {
            return true;
        } else {
            // NOTE - range check on each component?
            return monthPattern.test(month);
        }
    },

    /**
     * Validate a US phone number (999-999-9999).
     *
     * @param {string} phone                Phone number to be validated
     * @return {boolean}                    True if the phone number is valid or empty
     */
    phone (phone: string): boolean {
        if (!phone || (phone.length === 0)) {
            return true;
        } else {
            return phonePattern.test(phone);
        }
    },

    /**
     * Validate a US state abbreviation.
     * @param {string} state                State abbreviation to be validated
     * @return {boolean}                    True if the state abbreviation is valid or empty
     */
    state (state: string): boolean {
        if (!state || (state.length === 0)) {
            return true;
        } else {
            return stateAbbreviations.includes(state);
        }
    },

    /**
     * Validate a time string (99:99 or 99:99:99).
     *
     * @param {string} time                 Time string to be validated
     * @return {boolean}                    True if the time string is valid or empty
     */
    time (time: string): boolean {
        if (!time || (time.length === 0)) {
            return true;
        } else {
            // NOTE - range check on each component?
            return timePattern.test(time);
        }
    },

    /**
     * Validate a US zip code (99999 or 99999-9999).
     *
     * @param {string} zipCode              Zip code to be validated
     * @return {boolean}                    True if the zip code is valid or empty
     */
    zipCode (zipCode: string): boolean {
        if (!zipCode || (zipCode.length === 0)) {
            return true;
        } else {
            return zipCodePattern.test(zipCode);
        }
    }

}

export default Validators;

// Private Objects -----------------------------------------------------------

const datePattern: RegExp = /^\d{4}-\d{2}-\d{2}$/;

// From https://www.w3resource.com/javascript/form/email-validation.php
// Probably not universal but serves our current needs
const emailPattern: RegExp
    = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const monthPattern: RegExp = /^\d{4}-\d{2}$/;

const phonePattern: RegExp = /^\d{3}-\d{3}-\d{4}$/;

const stateAbbreviations: string[] =
    [ "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC",
        "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY",
        "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT",
        "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH",
        "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT",
        "VT", "VA", "WA", "WV", "WI", "WY" ];

const timePattern = /^\d{2}:\d{2}$|^\d{2}:\d{2}:\d{2}$/;

const zipCodePattern: RegExp = /^\d{5}$|^\d{5}-\d{4}$/;
