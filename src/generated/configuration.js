/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Configuration = $root.Configuration = (() => {

    /**
     * Properties of a Configuration.
     * @exports IConfiguration
     * @interface IConfiguration
     * @property {number|null} [timeout] Configuration timeout
     * @property {string|null} [deviceName] Configuration deviceName
     * @property {Configuration.AudibleFeedback|null} [audibleFeedback] Configuration audibleFeedback
     * @property {Configuration.VisibleFeedback|null} [visibleFeedback] Configuration visibleFeedback
     */

    /**
     * Constructs a new Configuration.
     * @exports Configuration
     * @classdesc Represents a Configuration.
     * @implements IConfiguration
     * @constructor
     * @param {IConfiguration=} [properties] Properties to set
     */
    function Configuration(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Configuration timeout.
     * @member {number} timeout
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.timeout = 0;

    /**
     * Configuration deviceName.
     * @member {string} deviceName
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.deviceName = "";

    /**
     * Configuration audibleFeedback.
     * @member {Configuration.AudibleFeedback} audibleFeedback
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.audibleFeedback = 0;

    /**
     * Configuration visibleFeedback.
     * @member {Configuration.VisibleFeedback} visibleFeedback
     * @memberof Configuration
     * @instance
     */
    Configuration.prototype.visibleFeedback = 0;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Configuration feedback.
     * @member {"audibleFeedback"|"visibleFeedback"|undefined} feedback
     * @memberof Configuration
     * @instance
     */
    Object.defineProperty(Configuration.prototype, "feedback", {
        get: $util.oneOfGetter($oneOfFields = ["audibleFeedback", "visibleFeedback"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Configuration instance using the specified properties.
     * @function create
     * @memberof Configuration
     * @static
     * @param {IConfiguration=} [properties] Properties to set
     * @returns {Configuration} Configuration instance
     */
    Configuration.create = function create(properties) {
        return new Configuration(properties);
    };

    /**
     * Encodes the specified Configuration message. Does not implicitly {@link Configuration.verify|verify} messages.
     * @function encode
     * @memberof Configuration
     * @static
     * @param {IConfiguration} message Configuration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Configuration.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.timeout != null && Object.hasOwnProperty.call(message, "timeout"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.timeout);
        if (message.deviceName != null && Object.hasOwnProperty.call(message, "deviceName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.deviceName);
        if (message.audibleFeedback != null && Object.hasOwnProperty.call(message, "audibleFeedback"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.audibleFeedback);
        if (message.visibleFeedback != null && Object.hasOwnProperty.call(message, "visibleFeedback"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.visibleFeedback);
        return writer;
    };

    /**
     * Encodes the specified Configuration message, length delimited. Does not implicitly {@link Configuration.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Configuration
     * @static
     * @param {IConfiguration} message Configuration message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Configuration.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Configuration message from the specified reader or buffer.
     * @function decode
     * @memberof Configuration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Configuration} Configuration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Configuration.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Configuration();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.timeout = reader.int32();
                break;
            case 2:
                message.deviceName = reader.string();
                break;
            case 3:
                message.audibleFeedback = reader.int32();
                break;
            case 4:
                message.visibleFeedback = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Configuration message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Configuration
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Configuration} Configuration
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Configuration.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Configuration message.
     * @function verify
     * @memberof Configuration
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Configuration.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.timeout != null && message.hasOwnProperty("timeout"))
            if (!$util.isInteger(message.timeout))
                return "timeout: integer expected";
        if (message.deviceName != null && message.hasOwnProperty("deviceName"))
            if (!$util.isString(message.deviceName))
                return "deviceName: string expected";
        if (message.audibleFeedback != null && message.hasOwnProperty("audibleFeedback")) {
            properties.feedback = 1;
            switch (message.audibleFeedback) {
            default:
                return "audibleFeedback: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        }
        if (message.visibleFeedback != null && message.hasOwnProperty("visibleFeedback")) {
            if (properties.feedback === 1)
                return "feedback: multiple values";
            properties.feedback = 1;
            switch (message.visibleFeedback) {
            default:
                return "visibleFeedback: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        }
        return null;
    };

    /**
     * Creates a Configuration message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Configuration
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Configuration} Configuration
     */
    Configuration.fromObject = function fromObject(object) {
        if (object instanceof $root.Configuration)
            return object;
        let message = new $root.Configuration();
        if (object.timeout != null)
            message.timeout = object.timeout | 0;
        if (object.deviceName != null)
            message.deviceName = String(object.deviceName);
        switch (object.audibleFeedback) {
        case "BEEP":
        case 0:
            message.audibleFeedback = 0;
            break;
        case "BUUP_BUUP":
        case 1:
            message.audibleFeedback = 1;
            break;
        case "BEEP_BUUP":
        case 2:
            message.audibleFeedback = 2;
            break;
        case "BEEP_BEEP":
        case 3:
            message.audibleFeedback = 3;
            break;
        }
        switch (object.visibleFeedback) {
        case "GREEN":
        case 0:
            message.visibleFeedback = 0;
            break;
        case "RED":
        case 1:
            message.visibleFeedback = 1;
            break;
        case "BLUE":
        case 2:
            message.visibleFeedback = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a Configuration message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Configuration
     * @static
     * @param {Configuration} message Configuration
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Configuration.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.timeout = 0;
            object.deviceName = "";
        }
        if (message.timeout != null && message.hasOwnProperty("timeout"))
            object.timeout = message.timeout;
        if (message.deviceName != null && message.hasOwnProperty("deviceName"))
            object.deviceName = message.deviceName;
        if (message.audibleFeedback != null && message.hasOwnProperty("audibleFeedback")) {
            object.audibleFeedback = options.enums === String ? $root.Configuration.AudibleFeedback[message.audibleFeedback] : message.audibleFeedback;
            if (options.oneofs)
                object.feedback = "audibleFeedback";
        }
        if (message.visibleFeedback != null && message.hasOwnProperty("visibleFeedback")) {
            object.visibleFeedback = options.enums === String ? $root.Configuration.VisibleFeedback[message.visibleFeedback] : message.visibleFeedback;
            if (options.oneofs)
                object.feedback = "visibleFeedback";
        }
        return object;
    };

    /**
     * Converts this Configuration to JSON.
     * @function toJSON
     * @memberof Configuration
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Configuration.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * AudibleFeedback enum.
     * @name Configuration.AudibleFeedback
     * @enum {number}
     * @property {number} BEEP=0 BEEP value
     * @property {number} BUUP_BUUP=1 BUUP_BUUP value
     * @property {number} BEEP_BUUP=2 BEEP_BUUP value
     * @property {number} BEEP_BEEP=3 BEEP_BEEP value
     */
    Configuration.AudibleFeedback = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BEEP"] = 0;
        values[valuesById[1] = "BUUP_BUUP"] = 1;
        values[valuesById[2] = "BEEP_BUUP"] = 2;
        values[valuesById[3] = "BEEP_BEEP"] = 3;
        return values;
    })();

    /**
     * VisibleFeedback enum.
     * @name Configuration.VisibleFeedback
     * @enum {number}
     * @property {number} GREEN=0 GREEN value
     * @property {number} RED=1 RED value
     * @property {number} BLUE=2 BLUE value
     */
    Configuration.VisibleFeedback = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "GREEN"] = 0;
        values[valuesById[1] = "RED"] = 1;
        values[valuesById[2] = "BLUE"] = 2;
        return values;
    })();

    return Configuration;
})();

export { $root as default };
