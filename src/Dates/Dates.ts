/**
 * @module @craigmcc/shared-utils/Dates
 *
 * @description
 * Convenience functions that perform useful calculations with dates that are
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
     * @param {string} value            Original date
     * @param {number} decrement        Number of days to decrement
     * @return {string}                 Updated date
     */
    decrement(value: string, decrement: number): string {
        return this.fromObject(subDays(this.toObject(value), decrement));
    },

    /**
     * Convert a Date object into the corresponding string.
     *
     * @param {Date} value              Date object to be converted
     * @return {string}                 Corresponding string object
     */
    fromObject(value: Date): string {
        const temp = format(value, "P");
        return temp.substr(6, 4) + "-"
            + temp.substr(0, 2) + "-"
            + temp.substr(3, 2);
    },

    /**
     * Return the specified date plus increment days.
     *
     * @param {string} value            Original date
     * @param {number} increment        Number of days to increment
     * @return {string}                 Updated date
     */
    increment(value: string, increment: number): string {
        return this.fromObject(addDays(this.toObject(value), increment));
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
     * @param {string} value            Date to be converted
     * @return {Date}                   Object representation of this date.
     */
    toObject(value: string): Date {
        return new Date(value + " 00:00:00");
    },

}

export default Dates;
