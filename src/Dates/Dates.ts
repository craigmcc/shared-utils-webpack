/**
 * @module @craigmcc/shared-utils/Dates
 *
 * @description
 * Convenience methods that perform useful calculations with dates that are
 * represented as strings (YYYY-MM-DD).  Only the toObject() and fromObject()
 * methods deal with actual JavaScript Date objects.
 */

// External Modules ----------------------------------------------------------

import addDays from "date-fns/addDays";
import format from "date-fns/format";
import subDays from "date-fns/subDays";

// Public Objects ------------------------------------------------------------

const Dates = {

    /**
     * Return the specified date minus decrement days.
     *
     * @param {string} date             Original date
     * @param {number} decrement        Number of days to decrement
     * @return {string}                 Updated date
     */
    decrement(date: string, decrement: number): string {
        return this.fromObject(subDays(this.toObject(date), decrement));
    },

    /**
     * Convert a Date object into the corresponding string.
     *
     * @param {Date} date               Date object to be converted
     * @return {string}                 Corresponding string object
     */
    fromObject(date: Date): string {
        let temp = format(date, "P");
        return temp.substr(6, 4) + "-"
            + temp.substr(0, 2) + "-"
            + temp.substr(3, 2);
    },

    /**
     * Return the specified date plus increment days.
     *
     * @param {string} date             Original date
     * @param {number} increment        Number of days to increment
     * @return {string}                 Updated date
     */
    increment(date: string, increment: number): string {
        return this.fromObject(addDays(this.toObject(date), increment));
    },

    /**
     * Return the current date in the local time zone.
     *
     * @return {string}                 Today's date
     */
    today(): string {
        return this.fromObject(new Date());
    },

    /**
     * Convert a string date into the corresponding Date object.
     *
     * @param {string} date             Date to be converted
     * @return {Date}                   Object representation of this date.
     */
    toObject(date: string): Date {
        return new Date(date + " 00:00:00");
    }

}

export default Dates;
