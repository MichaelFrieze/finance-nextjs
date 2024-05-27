"use client";

const routes = [
  { href: "/", label: "Overview" },
  { href: "/transactions", label: "Transactions" },
  { href: "/accounts", label: "Accounts" },
  { href: "/categories", label: "Categories" },
  { href: "/settings", label: "Settings" },
];

export const Navigation = () => {
  return (
    <div className="hidden items-center gap-x-2 overflow-x-auto lg:flex">
      {routes.map((route) => (
        <p>{route.label}</p>
      ))}
    </div>
  );
};
