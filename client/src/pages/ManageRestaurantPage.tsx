import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  return (
    <ManageRestaurantForm
      restaurant={null}
      onSave={(): void => {}}
      isLoading={false}
    />
  );
};

export default ManageRestaurantPage;
