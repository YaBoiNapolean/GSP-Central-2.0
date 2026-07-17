export default function DepartmentGrid({ departments, onOpen }) {
    return (
        <div className="departmentGrid">
            {departments.map((department) => (
                <DepartmentCard
                    key={department.id}
                    department={department}
                    onOpen={onOpen}
                />
            ))}
        </div>
    );
}