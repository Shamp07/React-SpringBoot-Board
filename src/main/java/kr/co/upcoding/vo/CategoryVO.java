package kr.co.upcoding.vo;

public class CategoryVO {
    String bc_id;
    String bc_name;
    String bc_order;

    public String getBc_id() {
        return bc_id;
    }

    public void setBc_id(String bc_id) {
        this.bc_id = bc_id;
    }

    public String getBc_name() {
        return bc_name;
    }

    public void setBc_name(String bc_name) {
        this.bc_name = bc_name;
    }

    public String getBc_order() {
        return bc_order;
    }

    public void setBc_order(String bc_order) {
        this.bc_order = bc_order;
    }

    @Override
    public String toString() {
        return "CategoryVO{" +
                "bc_id='" + bc_id + '\'' +
                ", bc_name='" + bc_name + '\'' +
                ", bc_order='" + bc_order + '\'' +
                '}';
    }
}
