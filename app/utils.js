import { cookies } from "next/headers";
import get from "lodash/get";
import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";
import isArray from "lodash/isArray";

const getDarkModeCookie = () => {
  const cookieStore = cookies();
  return (
    isArray(cookieStore.getAll()) &&
    !isEmpty(
      cookieStore
        .getAll()
        .find(
          (cookie) =>
            isEqual(get(cookie, "name"), "darkMode") &&
            isEqual(get(cookie, "value"), "true")
        )
    )
  );
};

export { getDarkModeCookie };
